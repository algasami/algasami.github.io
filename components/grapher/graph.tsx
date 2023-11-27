import { useEffect, useRef, useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import { ArcherContainerHandle } from "react-archer/lib/ArcherContainer/ArcherContainer.types";

export type INode = {
  id: string;
  label?: string;
  dsu: "U" | "V";
};
export type IInputEdge = {
  from: INode["id"];
  to: INode["id"];
  highlight?: boolean;
};
export type IBipartiteGraph = {
  nodes: Array<INode>;
  edge_info: Map<INode["id"], IInputEdge>;
  aggressive_adjs: Map<INode["id"], Array<INode["id"]>>;
};

export type IBipartiteGraphInput = {
  nodes: Array<INode>;
  x_size: number;
  y_size: number;
  adjs: Array<IInputEdge>;
};

// ! ad-hoc
export function edgeIdFromNodes(
  from: INode["id"],
  to: INode["id"],
  directional?: boolean
) {
  if (directional || getStringWeight(to) > getStringWeight(from)) {
    return `${from}_${to}`;
  } else return `${to}_${from}`;
}

export function getStringWeight(str: string) {
  // ad-hoc
  return str.charCodeAt(0);
}

export function calculateAdjs(inputEdge: Array<IInputEdge>) {
  const agg_adjs = new Map<string, Array<string>>();
  inputEdge.forEach((v, i) => {
    if (!agg_adjs.has(v.from)) {
      agg_adjs.set(v.from, [v.to]);
    } else {
      const adjs = [...agg_adjs.get(v.from)]; // immutable for map (better for debugging)
      adjs.push(v.to);
      agg_adjs.set(v.from, adjs);
    }
    if (!agg_adjs.has(v.to)) {
      agg_adjs.set(v.to, [v.from]);
    } else {
      const adjs = [...agg_adjs.get(v.to)]; // immutable for map (better for debugging)
      adjs.push(v.from);
      agg_adjs.set(v.to, adjs);
    }
  });

  return agg_adjs;
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
  graph.aggressive_adjs = calculateAdjs(input.adjs);
  input.adjs.forEach((v, i) => {
    console.log(v);
    graph.edge_info.set(edgeIdFromNodes(v.from, v.to), v);
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
  const archerContainerRef = useRef<ArcherContainerHandle>();
  const graph = getBipartiteGraphFromInput(input);
  if (graph === undefined) return <></>;
  return (
    <div className={`simple-graph ${className}`}>
      <ArcherContainer endMarker={false} ref={archerContainerRef}>
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
                        if (
                          graph.edge_info.get(
                            edgeIdFromNodes(node.id, to, true)
                          ).highlight
                        )
                          console.log("yes");
                        return {
                          targetId: to,
                          targetAnchor: node.dsu === "U" ? "left" : "right",
                          sourceAnchor: node.dsu === "U" ? "right" : "left",
                          style: {
                            strokeColor: graph.edge_info.get(
                              edgeIdFromNodes(node.id, to, true)
                            ).highlight
                              ? "#ff000"
                              : "#4a4a4f",
                          },
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
