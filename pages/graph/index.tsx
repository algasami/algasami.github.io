import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  BipartiteGraph,
  IBipartiteGraphInput,
  calculateAdjs,
  edgeIdFromNodes,
  getStringWeight,
} from "components/grapher/graph";
import { useState } from "react";

function getMatching(input: IBipartiteGraphInput) {
  let current_turn = 0;
  const aggressive_adjs = calculateAdjs(input.adjs);
  input.nodes.forEach((v) => {
    if (aggressive_adjs.has(v.id) === false) {
      aggressive_adjs.set(v.id, []);
    }
  });
  const matching = new Map<string, string>();
  const visited = new Map<string, number>();
  function find_augmented_path(x: string, d: number): boolean {
    let good = false;
    console.log(`${"\t".repeat(d)} ${x}`);
    aggressive_adjs.get(x).forEach((y) => {
      if (good) return;
      if (visited.has(y) && visited.get(y) === current_turn) return;
      visited.set(y, current_turn);
      if (
        !matching.has(y) ||
        (matching.get(y) !== x && find_augmented_path(matching.get(y), d + 1))
      ) {
        matching.set(y, x);
        good = true;
      }
    });
    return good;
  }
  for (current_turn = 1; current_turn <= input.x_size; current_turn++) {
    console.log(current_turn);
    find_augmented_path(`X${current_turn}`, 0);
  }
  return matching;
}

const default_graph: IBipartiteGraphInput = {
  nodes: [
    { id: "X1", dsu: "U", label: "120V AC 1" },
    { id: "Y1", dsu: "V", label: "Water Pumps" },
    { id: "X2", dsu: "U", label: "120V AC 2" },
    { id: "Y2", dsu: "V", label: "Ventilation System" },
    { id: "X3", dsu: "U", label: "240V AC 1" },
    { id: "Y3", dsu: "V", label: "Life-Support System" },
    { id: "X4", dsu: "U", label: "240V AC 2" },
    { id: "Y4", dsu: "V", label: "Railgun & Machinary" },
    { id: "X5", dsu: "U", label: "240V AC 3" },
    { id: "Y5", dsu: "V", label: "Deep-sea Sonar" },
  ],
  x_size: 5,
  y_size: 5,
  adjs: [],
};

export default function Graph() {
  const [graphInput, setGraphInput] =
    useState<IBipartiteGraphInput>(default_graph);

  const [selX, setSelX] = useState<string>("");
  const [selY, setSelY] = useState<string>("");
  return (
    <main className="graph-page hallway-size min-w-[40vw] max-w-[80vw] lg:max-w-[60vw]">
      <h1>Graph Toolkit</h1>
      <hr />
      This algorithm works all the time... ALMOST! SOMETHING AROUND 99% of the
      time!
      <div className="graph-container flex flex-row justify-center w-full">
        <BipartiteGraph className="w-full my-4" input={graphInput} />
      </div>
      <div className="button-row flex flex-row justify-center w-full">
        <button
          className="add-node-button inter-button-neutral m-2"
          onClick={() => {
            const cop = structuredClone(graphInput);
            cop.x_size += 1;
            cop.nodes.push({ id: `X${cop.x_size}`, dsu: "U" });
            setGraphInput(cop);
          }}
        >
          Add X
        </button>
        <button
          className="add-node-button inter-button-neutral m-2"
          onClick={() => {
            const cop = structuredClone(graphInput);
            cop.y_size += 1;
            cop.nodes.push({ id: `Y${cop.y_size}`, dsu: "V" });
            setGraphInput(cop);
          }}
        >
          Add Y
        </button>
        <button
          className="calculate-node-button inter-button m-2"
          onClick={() => {
            const cop = structuredClone(graphInput);
            cop.adjs.forEach((v) => {
              v.highlight = undefined;
            });
            const matching = getMatching(cop);
            matching.forEach((from, to) => {
              cop.adjs.forEach((v, i) => {
                // ! pass by reference!
                if (v.from === from && v.to === to) {
                  v.highlight = true;
                }
              });
            });
            setGraphInput(cop);
          }}
        >
          Calculate
        </button>
        <button
          className="reset-node-button inter-button-warning m-2"
          onClick={() => {
            setGraphInput(default_graph);
            setSelX("");
            setSelY("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="add-edge-button flex flex-row justify-center rounded-lg p-2 m-2 w-full bg-opacity-70 bg-violet-300">
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label">X Node</InputLabel>
          <Select
            labelId="U_Node_Select_Label"
            id="U_Node_Select"
            label="Unode"
            value={selX}
            onChange={(event) => {
              setSelX(event.target.value);
            }}
          >
            {graphInput.nodes.map((n) => {
              if (n.dsu === "V") return undefined;
              return (
                <MenuItem key={n.id} value={n.id}>
                  {n.label ?? n.id}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label">Y Node</InputLabel>
          <Select
            labelId="V_Node_Select_Label"
            id="V_Node_Select"
            label="Unode"
            value={selY}
            onChange={(event) => {
              setSelY(event.target.value);
            }}
          >
            {graphInput.nodes.map((n) => {
              if (n.dsu === "U") return undefined;
              return (
                <MenuItem key={n.id} value={n.id}>
                  {n.label ?? n.id}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <button
          className={`add-node-button inter-button-neutral ${
            selX === "" || selY === ""
              ? "bg-gray-500 dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-gray-500 line-through"
              : undefined
          }`}
          onClick={() => {
            if (selX === "" || selY === "") return;
            const cop = structuredClone(graphInput);
            for (const edge of cop.adjs) {
              if (edge.from === selX && edge.to === selY) return;
            }
            cop.adjs.push({ from: selX, to: selY });
            setGraphInput(cop);
          }}
        >
          Append Edge
        </button>
      </div>
    </main>
  );
}
