import React, { useEffect } from "react";

export default function GraphPage() {
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
    </main>
  );
}
