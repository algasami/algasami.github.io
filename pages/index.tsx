import { Table, TableCell, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { Region } from "../components/region";
import { projects, timeline, TimelineItem, TProjectItem } from "../data/misc";
import { age } from "../scripts/time-utils";

function TimelineComponent({
  timeline: timelineitem,
}: {
  timeline: TimelineItem;
}) {
  return (
    <div className="timelinecomponent">
      <Region
        title={timelineitem.title}
        color={timelineitem.category.color}
        subtitle={timelineitem.date}
      >
        {timelineitem.content}
        {/* link icon followed by timelineitem's link */}
        {timelineitem.link && (
          <a
            href={timelineitem.link.url}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-2 my-2 bg-amber-400 transition-all hover:shadow-lg hover:bg-violet-400 text-zinc-900 rounded-lg w-max font-semibold"
          >
            {timelineitem.link.text}
          </a>
        )}
      </Region>
    </div>
  );
}
function ProjectComponent({ project }: { project: TProjectItem }) {
  return (
    <div className="projectcomponent">
      <Region
        title={project.name}
        color={"bg-slate-500"}
        subtitle={project.subtitle}
      >
        {project.content}
        {/* link icon followed by timelineitem's link */}
        <a
          href={`https://github.com/algasami/${project.name}`}
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
          className="py-2 px-2 my-2 bg-amber-400 transition-all hover:shadow-lg hover:bg-violet-400 text-zinc-900 rounded-lg w-max font-semibold"
        >
          Take me there
        </a>
      </Region>
    </div>
  );
}

export default function Hallway({
  updateList,
}: {
  updateList: { [k: number]: TimelineItem };
}) {
  return (
    <div className="max-w-max h-full flex flex-col hallway-size">
      <h1 className="font-light text-center m-4 lg:tracking-widest select-none bg-clip-text text-transparent from-amber-700 to-violet-900 via-fuchsia-800 dark:from-amber-400 dark:to-violet-200 dark:via-fuchsia-500 bg-gradient-to-tr">
        ALGASAMI
      </h1>

      <footer className="text-center italic lg:tracking-widest select-none">
        {age} years old, Web/Game/Low-level
      </footer>

      <div className="my-4"></div>
      <main className="flex lg:flex-row flex-col justify-between">
        <Region title={"About"} color="bg-slate-900">
          <div className="flex flex-col lg:overflow-scroll masked-overflow lg:max-h-[50vh]">
            <div className="flex flex-col justify-between">
              <Region title={"Education"} color="bg-slate-800">
                I{"'"}m an aspired high school student in Taiwan currently
                creating a few computer science projects.
              </Region>
              <Region title={"Interests"} color="bg-slate-800">
                I&apos;m interested in competitive programming, web development,
                hardware design and computer science in general.
              </Region>
            </div>
            <Region title={"Certificates"} color="bg-slate-900">
              <Table>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Proficiency</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>GEPT</TableCell>
                  <TableCell>Advanced Intermediate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>APCS Concept Section</TableCell>
                  <TableCell>4/5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>APCS Programming Section</TableCell>
                  <TableCell>4/5</TableCell>
                </TableRow>
              </Table>
              <span className="italic my-2">
                GEPT stands for General English Proficiency Test(全民英檢). APCS
                stands for Advanced Placement Computer
                Science(大學程式設計先修檢測).
              </span>
            </Region>
            <Region title={"Projects"} color="bg-slate-900">
              {Object.values(projects).map((projectItem) => (
                <ProjectComponent
                  key={projectItem.name}
                  project={projectItem}
                />
              ))}
            </Region>
          </div>
        </Region>

        <Region title={"Timeline"} color="bg-slate-900">
          <div className="flex flex-col justify-between lg:overflow-scroll masked-overflow lg:max-h-[50vh]">
            {Object.values(updateList).map((timelineitem) => (
              <TimelineComponent
                key={timelineitem.title}
                timeline={timelineitem}
              />
            ))}
          </div>
        </Region>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      updateList: timeline,
    },
  };
}
