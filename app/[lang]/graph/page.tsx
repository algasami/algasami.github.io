"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  BipartiteGraph,
  IBipartiteGraphInput,
  calculateAdjs,
} from "../../components/grapher/graph";
import { useEffect, useState } from "react";
import { Locale } from "i18n-config";
import { getDictionary } from "get-dictionary";

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

function getdist(a: TCoord, b: TCoord) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

const default_graph: IBipartiteGraphInput = {
  nodes: [],
  x_size: 0,
  y_size: 0,
  adjs: [],
};

type TCoord = {
  x: number;
  y: number;
};

const HEIGHT = 20,
  WIDTH = 20;
function getKey(i: number, j: number) {
  return `${i},${j}`;
}
function fromkey(str: string): TCoord {
  const splits = str.split(",");
  return {
    x: parseInt(splits[1]),
    y: parseInt(splits[0]),
  };
}
function copyMap<K, V>(map: Map<K, V>) {
  const copy = new Map<K, V>();
  map.forEach((v, i) => {
    copy.set(i, v);
  });
  return copy;
}
let mouseisdown = false;
export default function Graph({ params }: { params: { lang: Locale } }) {
  const dict = getDictionary(params.lang).graph;
  const [graphInput, setGraphInput] =
    useState<IBipartiteGraphInput>(default_graph);

  const [selX, setSelX] = useState<string>("");
  const [selY, setSelY] = useState<string>("");

  const [trav_state, set_trav_state] = useState(0);
  const [algo, set_algo] = useState(0);
  const [total_visited, set_total_visited] = useState(0);
  const [obstacles, set_obstacles] = useState<Map<string, boolean>>(new Map());
  const [visited, set_visited] = useState<Map<string, boolean>>(new Map());
  const [mindist, set_mindist] = useState<Map<string, number>>(new Map());
  const [start, set_start] = useState<TCoord | undefined>(undefined);
  const [front, set_front] = useState<TCoord | undefined>(undefined);
  const [previous, set_previous] = useState<Map<string, TCoord>>(new Map());
  const [end, set_end] = useState<TCoord | undefined>(undefined);
  const [pq, set_pq] = useState<{ node: TCoord; priority: number }[]>([]);

  useEffect(() => {
    const downevent = () => {
      mouseisdown = true;
    };
    const upevent = () => {
      mouseisdown = false;
    };
    window.addEventListener("mousedown", downevent);
    window.addEventListener("mouseup", upevent);
    return () => {
      window.removeEventListener("mousedown", downevent);
      window.removeEventListener("mouseup", upevent);
    };
  });

  const path: TCoord[] = [];
  let completeness = false;
  if (trav_state === 3 && front !== undefined) {
    path.push(front);
    // display current path
    let last = previous.get(getKey(front.y, front.x));
    if (last !== undefined) {
      path.push(last);
      while (last.x !== start.x || last.y !== start.y) {
        last = previous.get(getKey(last.y, last.x));
        path.push(last);
      }
      if (last.x === start.x && last.y === start.y && pq.length === 0) {
        completeness = true;
      }
    }
  }

  const grids = [];
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      let color = "bg-gray-400 hover:bg-gray-200 transition-colors";
      let isobs = false;
      const key = getKey(i, j);
      if (obstacles.has(key) && obstacles.get(key)) {
        color = "bg-gray-900";
        isobs = true;
      }
      if (start && start.x === j && start.y === i) {
        color = "bg-green-600";
      } else if (end && end.x === j && end.y === i) {
        color = "bg-yellow-500";
      }
      if (visited.has(key) && visited.get(key)) {
        color = "bg-red-600";
      }
      if (path.findIndex((v) => v.x === j && v.y === i) >= 0) {
        color = "bg-yellow-500";
      }
      const activate = () => {
        if (trav_state === 0) {
          // set obstacles
          const cop = copyMap(obstacles);
          if (cop.has(getKey(i, j))) {
            cop.set(key, !cop.get(key));
          } else {
            cop.set(key, true);
          }
          set_obstacles(cop);
        } else if (trav_state === 1 && !isobs) {
          // set start
          set_start({ x: j, y: i });
        } else if (trav_state === 2 && !isobs) {
          // set end
          set_end({ x: j, y: i });
        }
      };
      grids.push(
        <button
          key={key}
          className={`${color} w-[20px] h-[20px]`}
          onMouseOver={() => {
            if (!mouseisdown) return;
            activate();
          }}
          onClick={activate}
        ></button>
      );
    }
  }
  useEffect(() => {
    const conn = setTimeout(() => {
      if (
        trav_state !== 3 ||
        pq.length == 0 ||
        start === undefined ||
        end === undefined ||
        (algo === 0 && completeness)
      ) {
        set_front(end);
        return;
      }
      const pqcopy = [...pq];

      const node_first = pqcopy.shift().node;
      set_front(node_first);
      const firstkey = getKey(node_first.y, node_first.x);

      visited.set(firstkey, true);
      set_total_visited(total_visited + 1);
      if (node_first.x === end.x && node_first.y === end.y && algo === 0) {
        set_pq([]);
        set_front(end);
        return;
      }
      // get adjs
      const up_adj = {
        x: node_first.x,
        y: node_first.y - 1,
      };
      const down_adj = {
        x: node_first.x,
        y: node_first.y + 1,
      };
      const left_adj = {
        x: node_first.x - 1,
        y: node_first.y,
      };
      const right_adj = {
        x: node_first.x + 1,
        y: node_first.y,
      };
      const pq_calc = (coord: TCoord) => {
        const key = getKey(coord.y, coord.x);
        if (
          coord.x < 0 ||
          coord.x >= WIDTH ||
          coord.y < 0 ||
          coord.y >= HEIGHT ||
          obstacles.get(key)
        ) {
          return;
        }
        const thisdist = mindist.get(firstkey) + 1;
        if (mindist.has(key) === false || mindist.get(key) > thisdist) {
          mindist.set(key, thisdist);
          previous.set(key, {
            x: node_first.x,
            y: node_first.y,
          });
          pqcopy.push({
            node: coord,
            priority:
              algo === 0
                ? thisdist + getdist(coord, end)
                : algo === 1
                ? thisdist
                : 0,
          });
        }
      };
      pq_calc(up_adj);
      pq_calc(down_adj);
      pq_calc(left_adj);
      pq_calc(right_adj);
      pqcopy.sort((a, b) => a.priority - b.priority);
      set_pq(pqcopy);
    }, 5);
    return () => {
      clearTimeout(conn);
    };
  });
  return (
    <main className="graph-page hallway-size min-w-[40vw] max-w-[80vw] lg:max-w-[60vw]">
      <h1>{dict.title}</h1>
      <hr />
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
          {dict.add_x}
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
          {dict.add_y}
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
          {dict.calculate}
        </button>
        <button
          className="reset-node-button inter-button-warning m-2"
          onClick={() => {
            setGraphInput(default_graph);
            setSelX("");
            setSelY("");
          }}
        >
          {dict.reset}
        </button>
      </div>
      <div className="add-edge-button flex flex-row justify-center rounded-lg p-2 m-2 w-full bg-opacity-70 bg-violet-300">
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-label">{dict.x_node}</InputLabel>
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
          <InputLabel id="demo-simple-select-label">{dict.y_node}</InputLabel>
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
          {dict.append}
        </button>
      </div>
      <br />
      <h2>{dict.how_it_work}</h2>
      <hr />
      <p>{dict.content}</p>
      <h1>{dict.traversal_title}</h1>
      <hr />
      <h3>{`${dict.a_star_state_form}: ${dict.STATE_TEXTS[trav_state]} |
      ${dict.a_star_algo_form}: ${dict.a_star_algos[algo]} | ${dict.a_star_visited}: ${total_visited}`}</h3>
      <div
        className="flex flex-wrap"
        style={{
          width: 20 * WIDTH,
        }}
      >
        {grids}
      </div>
      <br />
      <button
        className={`add-node-button inter-button-neutral m-1`}
        onClick={() => {
          set_visited(new Map());
          set_previous(new Map());
          set_total_visited(0);
          const trav_copy = (trav_state + 1) % dict.STATE_TEXTS.length;
          const distmap = new Map();
          if (trav_copy === 3 && start && end) {
            distmap.set(getKey(start.y, start.x), 0);
            set_pq([
              {
                node: start,
                priority: 0,
              },
            ]);
            set_mindist(distmap);
          }
          set_trav_state(trav_copy);
        }}
      >
        {dict.a_star_next_step}
      </button>
      <button
        className={`add-node-button inter-button-neutral m-1`}
        onClick={() => {
          set_algo((algo + 1) % dict.a_star_algos.length);
        }}
      >
        {dict.a_star_next_algo}
      </button>
      <button
        className={`add-node-button inter-button-warning m-1`}
        onClick={() => {
          set_trav_state(0);
          set_algo(0);
          set_visited(new Map());
          set_obstacles(new Map());
          set_start(undefined);
          set_end(undefined);
        }}
      >
        {dict.a_star_rst}
      </button>
      <h2>{dict.a_star_desc[algo].title}</h2>
      <hr />
      <p>{dict.a_star_desc[algo].content}</p>
    </main>
  );
}
