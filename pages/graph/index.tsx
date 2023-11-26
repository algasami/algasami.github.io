import { BipartiteGraph } from "components/grapher/graph";

export default function Graph() {
  return (
    <main className="graph-page hallway-size min-w-[40vw] max-w-[80vw] lg:max-w-[60vw]">
      <h1>Graph Toolkit</h1>
      <hr />
      Testing graph.tsx...
      <div className="graph-container flex flex-row justify-center w-full">
        <BipartiteGraph
          className="min-w-[500px] my-4"
          input={{
            nodes: [
              { id: "X1", dsu: "U" },
              { id: "Y1", dsu: "V" },
              { id: "X2", dsu: "U" },
              { id: "Y2", dsu: "V" },
              { id: "X3", dsu: "U" },
              { id: "Y3", dsu: "V" },
            ],
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
          }}
        />
      </div>
    </main>
  );
}
