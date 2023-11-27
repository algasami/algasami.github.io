import {
  BipartiteGraph,
  IBipartiteGraphInput,
  calculateAdjs,
  edgeIdFromNodes,
  getStringWeight,
} from "components/grapher/graph";
import { useState } from "react";

function bfs(
  agg_adjs: Map<string, Array<string>>,
  residual: Map<string, number>,
  parents: Map<string, string>
): boolean {
  // !warning! all are references!
  const visited = new Map<string, boolean>();
  const queue: Array<string> = ["S"];
  visited.set("S", true);
  while (queue.length > 0) {
    console.log(queue);
    const from = queue.shift();
    if (agg_adjs.has(from) === false) continue;
    const adjs = agg_adjs.get(from);
    for (const to of adjs) {
      if (
        visited.has(to) === false &&
        residual.get(edgeIdFromNodes(from, to, true)) > 0
      ) {
        if (to === "T") {
          parents.set(to, from);
          return true;
        }
        queue.push(to);
        parents.set(to, from);
        visited.set(to, true);
      }
    }
  }
  return false;
}

function getMatching(input: IBipartiteGraphInput) {
  const aggressive_adjs = calculateAdjs(input.adjs);
  const residual = new Map<string, number>();
  aggressive_adjs.set("S", []);
  aggressive_adjs.set("T", []);
  aggressive_adjs.forEach((adjs, nodeId) => {
    input.nodes.forEach((node) => {
      if (node.id !== nodeId) return;
      if (node.dsu === "U") {
        const n = [...aggressive_adjs.get("S")];
        n.push(nodeId);
        aggressive_adjs.set("S", n);
      } else {
        if (aggressive_adjs.has(nodeId)) {
          const cop = [...aggressive_adjs.get(nodeId)]; // immutable (easier to debug without pointers)
          cop.push("T"); // push sink
          aggressive_adjs.set(nodeId, cop);
        } else {
          aggressive_adjs.set(nodeId, ["T"]); // add sink
        }
      }
    });
  });
  aggressive_adjs.forEach((adjs, nodeId) => {
    input.nodes.forEach((node) => {
      if (node.id !== nodeId) return;
      if (node.dsu === "U") {
        residual.set(edgeIdFromNodes("S", nodeId, true), 1);
        residual.set(edgeIdFromNodes(nodeId, "S", true), 0);
        adjs.forEach((toId) => {
          residual.set(edgeIdFromNodes(nodeId, toId, true), 1);
          residual.set(edgeIdFromNodes(toId, nodeId, true), 0);
        });
      } else {
        residual.set(edgeIdFromNodes(nodeId, "T", true), 1);
        residual.set(edgeIdFromNodes("T", nodeId, true), 0);
      }
    });
    // create residual graph
  });

  const parents: Map<string, string> = new Map();

  let max_flow = 0;

  while (bfs(aggressive_adjs, residual, parents)) {
    let path_flow = Number.MAX_SAFE_INTEGER;
    let nodeId: string;
    for (
      nodeId = "T";
      nodeId !== "S" && nodeId !== undefined;
      nodeId = parents.get(nodeId)
    ) {
      const from = parents.get(nodeId);
      if (from == "S") break;
      path_flow = Math.min(
        path_flow,
        residual.get(edgeIdFromNodes(from, nodeId, true))
      );
    }
    max_flow += path_flow;
    for (
      nodeId = "T";
      nodeId !== "S" && nodeId !== undefined;
      nodeId = parents.get(nodeId)
    ) {
      const from = parents.get(nodeId);
      const normal = edgeIdFromNodes(from, nodeId, true);
      const reversed = edgeIdFromNodes(nodeId, from, true);
      residual.set(normal, residual.get(normal) - path_flow);
      residual.set(reversed, residual.get(reversed) + path_flow);
    }
  }
  return { parents, residual };
}

export default function Graph() {
  const [graphInput, setGraphInput] = useState<IBipartiteGraphInput>({
    nodes: [
      { id: "X1", dsu: "U" },
      { id: "Y1", dsu: "V" },
      { id: "X2", dsu: "U" },
      { id: "Y2", dsu: "V" },
      { id: "X3", dsu: "U" },
      { id: "Y3", dsu: "V" },
    ],
    x_size: 3,
    y_size: 3,
    adjs: [
      {
        from: "X1",
        to: "Y1",
      },
      {
        from: "X1",
        to: "Y2",
      },
      {
        from: "X2",
        to: "Y1",
      },
      {
        from: "X3",
        to: "Y2",
      },
      {
        from: "X3",
        to: "Y3",
      },
    ],
  });
  return (
    <main className="graph-page hallway-size min-w-[40vw] max-w-[80vw] lg:max-w-[60vw]">
      <h1>Graph Toolkit</h1>
      <hr />
      Testing graph.tsx...
      <div className="graph-container flex flex-row justify-center w-full">
        <BipartiteGraph className="w-full my-4" input={graphInput} />
      </div>
      <div className="button-row flex flex-row justify-center w-full">
        <button className="add-node-button inter-button m-2">Add X</button>
        <button className="add-node-button inter-button m-2">Add Y</button>
        <button
          className="calculate-node-button inter-button m-2"
          onClick={() => {
            const cop = { ...graphInput };
            cop.adjs.forEach((v) => {
              v.highlight = undefined;
            });
            const { parents, residual } = getMatching(cop);
            parents.forEach((from, to) => {
              if (from === "T" || from === "S" || to === "T" || to === "S")
                return;
              if (getStringWeight(from) > getStringWeight(to)) return;
              console.log(from, to);
              const first =
                getStringWeight(from) > getStringWeight(to) ? to : from;
              const second =
                getStringWeight(from) > getStringWeight(to) ? from : to;
              cop.adjs.forEach((v, i) => {
                // ! pass by reference!
                if (v.from === first && v.to === to) {
                  v.highlight = true;
                }
              });
            });
            setGraphInput(cop);
          }}
        >
          Calculate
        </button>
      </div>
    </main>
  );
}
