import { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";

export type INode = {
  id: string;
  label?: string;
  dsu: "U" | "V";
};
export type IInputEdge = {
  from: INode["id"];
  to: INode["id"];
  properties?: IEdgeProperties;
};
export type IEdgeProperties = {
  label?: string;
};
export type IBipartiteGraph = {
  nodes: Array<INode>;
  edge_info: Map<INode["id"], IInputEdge>;
  aggressive_adjs: Map<INode["id"], Array<INode["id"]>>;
};

type IBipartiteGraphInput = {
  nodes: Array<INode>;
  adjs: Array<IInputEdge>;
};

// ! ad-hoc
function edgeIdFromNodes(
  from: INode["id"],
  to: INode["id"],
  directional?: boolean
) {
  if (directional && getStringWeight(to) < getStringWeight(from)) {
    return `${to}->${from}`;
  }
  return `${from}->${to}`;
}

function getStringWeight(str: string) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

function getBipartiteGraphFromInput(
  input: IBipartiteGraphInput
): IBipartiteGraph {
  const graph: IBipartiteGraph = {
    nodes: [],
    edge_info: new Map(),
    aggressive_adjs: new Map(),
  };
  graph.nodes = [...input.nodes];
  input.adjs.forEach((v, i) => {
    graph.edge_info.set(edgeIdFromNodes(v.from, v.to), v);
    if (!graph.aggressive_adjs.has(v.from)) {
      graph.aggressive_adjs.set(v.from, [v.to]);
    } else {
      const adjs = [...graph.aggressive_adjs.get(v.from)]; // immutable for map (better for debugging)
      adjs.push(v.to);
      graph.aggressive_adjs.set(v.from, adjs);
    }
    if (!graph.aggressive_adjs.has(v.to)) {
      graph.aggressive_adjs.set(v.to, [v.from]);
    } else {
      const adjs = [...graph.aggressive_adjs.get(v.to)]; // immutable for map (better for debugging)
      adjs.push(v.from);
      graph.aggressive_adjs.set(v.to, adjs);
    }
  });
  return graph;
}

export function BipartiteGraph({
  className,
  input,
}: {
  className?: string;
  input: IBipartiteGraphInput;
}) {
  const [graph, setGraph] = useState<IBipartiteGraph>(
    getBipartiteGraphFromInput(input)
  );
  if (graph === undefined) return <></>;
  return (
    <div className={`simple-graph ${className}`}>
      <ArcherContainer strokeColor="#4a4a4f" endMarker={false}>
        {graph.nodes.map((node) => {
          return (
            <div
              className={`pseudo flex flex-row ${
                node.dsu === "U" ? "justify-start" : "justify-end"
              }`}
              key={node.id}
            >
              <ArcherElement
                id={node.id}
                relations={
                  graph.aggressive_adjs.has(node.id) && node.dsu === "U"
                    ? graph.aggressive_adjs.get(node.id).map((to) => {
                        return {
                          targetId: to,
                          targetAnchor: node.dsu === "U" ? "left" : "right",
                          sourceAnchor: node.dsu === "U" ? "right" : "left",
                        };
                      })
                    : []
                }
              >
                <span className="inode bg-cyan-500 dark:bg-cyan-800 p-4 rounded-full shadow-lg">
                  {node.label ?? node.id}
                </span>
              </ArcherElement>
            </div>
          );
        })}
      </ArcherContainer>
    </div>
  );
}
