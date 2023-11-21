import React, { useEffect, useState } from "react";
import Graph from "react-graph-vis";

type TNode = { id: number; label: string; title?: string };
type TEdge = { from: number; to: number };

type TGraph = {
  nodes: Array<{ id: number; label: string; title?: string }>;
  edges: Array<{ from: number; to: number }>;
};

type TBipartite = {
  X: TGraph["nodes"];
  Y: TGraph["nodes"];
  V: TGraph["edges"];
};

const createNode = (id: number): TNode => {
  return {
    id: id,
    label: id.toString(),
  };
};

const bipartToGraph = (bipart: TBipartite): TGraph => {
  const nodes = bipart.X.concat(bipart.Y);
  const edges = bipart.V;
  return {
    nodes: nodes,
    edges: edges,
  };
};

export default function GraphPage() {
  const [graph, setGraph] = useState<TBipartite>({
    X: [createNode(0), createNode(1), createNode(2), createNode(3)],
    Y: [createNode(4), createNode(5), createNode(6), createNode(7)],
    V: [
      { from: 0, to: 4 },
      { from: 0, to: 5 },
      { from: 1, to: 5 },
      { from: 2, to: 5 },
      { from: 2, to: 6 },
      { from: 3, to: 6 },
      { from: 3, to: 7 },
    ],
  });

  const options = {
    edges: {},
    height: "500px",
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
  };
  return (
    <main className="graph-page hallway-size min-w-[40vw] max-w-[80vw] lg:max-w-[60vw]">
      <h1>Graph</h1>
      <p>All about some interesting graphs</p>
      <hr />
      <h2>Maximum Matching of Bipartitie Graph</h2>
      <Graph graph={bipartToGraph(graph)} options={options} events={events} />
    </main>
  );
}
