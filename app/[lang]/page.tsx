import { NoSsr, Table, TableCell, TableRow } from "@mui/material";
import React from "react";
import { Region } from "../components/region";
import { TimelineItem, TProjectItem } from "../../data/misc";
import { age } from "../../scripts/time-utils";
import { Locale, i18n } from "i18n-config";
import { getDictionary } from "get-dictionary";

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

export async function generateStaticParams() {
  return i18n.locales.map((loc) => ({
    lang: loc,
  }));
}

export default async function RootPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = getDictionary(params.lang)["index"];
  return (
    <div className="max-w-max h-full flex flex-col hallway-size">
      <h1 className="font-light text-center m-4 lg:tracking-widest">
        ALGASAMI
      </h1>

      <footer className="text-center italic lg:tracking-widest">
        {age}
        {dict["author_subtitle"]}
      </footer>

      <main className="flex lg:flex-row flex-col justify-between lg:max-h-[70vh]">
        <Region title={dict.about.title} color="bg-slate-900">
          <div className="flex flex-col lg:overflow-scroll masked-overflow">
            <div className="flex flex-col justify-between">
              <Region title={dict.about.education.title} color="bg-slate-800">
                {dict.about.education.content}
              </Region>
              <Region title={dict.about.interests.title} color="bg-slate-800">
                {dict.about.interests.content}
              </Region>
            </div>
            <Region title={dict.about.certs.title} color="bg-slate-900">
              <NoSsr>
                <Table>
                  <TableRow>
                    <TableCell>{dict.about.certs.header_name}</TableCell>
                    <TableCell>{dict.about.certs.header_pro}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{dict.about.certs.toeic}</TableCell>
                    <TableCell>985/990</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{dict.about.certs.gept}</TableCell>
                    <TableCell>{dict.about.certs.gept_level}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{dict.about.certs.apcs_cs}</TableCell>
                    <TableCell>4/5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{dict.about.certs.apcs_ps}</TableCell>
                    <TableCell>4/5</TableCell>
                  </TableRow>
                </Table>
              </NoSsr>
              <span className="italic my-2">{dict.about.certs.footer}</span>
            </Region>
          </div>
        </Region>

        <Region title={dict.project_title} color="bg-slate-900">
          <div className="flex flex-col justify-between lg:overflow-scroll masked-overflow ">
            {Object.values(dict.projects).map((projectItem) => (
              <ProjectComponent key={projectItem.name} project={projectItem} />
            ))}
          </div>
        </Region>
        <Region title={dict.timeline_title} color="bg-slate-900">
          <div className="flex flex-col justify-between lg:overflow-scroll masked-overflow ">
            {Object.values(dict.timeline).map((timelineitem) => (
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
