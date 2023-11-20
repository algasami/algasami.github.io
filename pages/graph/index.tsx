import React, { useEffect } from "react";
import Graph from "react-graph-vis";

export default function GraphPage() {
  const graph = {
    nodes: [
      { id: 1, label: "Node 1", title: "node 1 tootip text" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ],
  };

  const options = {
    layout: {
      hierarchical: true,
    },
    edges: {
      color: "#000000",
    },
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
      <h2>Simple Graph</h2>
      <cite>
        A simple graph is a graph that does not have more than one edge between
        any two vertices and no edge starts and ends at the same vertex. In
        other words a simple graph is a graph without loops and multiple edges.
        <br />
        -- Virginia Commonwealth University
      </cite>
      <Graph
        graph={graph}
        options={options}
        events={events}
        getNetwork={(network) => {
          //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
      />
    </main>
  );
}
