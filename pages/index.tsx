import { Table, TableCell, TableRow } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Region } from "../components/region";
import { timeline, TimelineItem } from "../data/timeline";
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
						className="py-2 px-4 my-2 bg-slate-200 transition-all hover:shadow-lg hover:bg-violet-200 text-zinc-900 rounded-full w-max font-semibold"
						style={{ textDecoration: "none" }}
						href={timelineitem.link.url}
						target="_blank"
						rel="noreferrer"
					>
						<span className="">{timelineitem.link.text}</span>
					</a>
				)}
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
		<div
			className="max-w-max h-full flex flex-col justify-center pt-16"
			style={{ maxWidth: "80vw" }}
		>
			<h1 className="font-light text-center m-4 lg:tracking-widest select-none bg-clip-text text-transparent from-amber-700 to-violet-900 via-fuchsia-800 dark:from-amber-400 dark:to-violet-200 dark:via-fuchsia-500 bg-gradient-to-tr">
				ALGASAMI
			</h1>

			<footer className="font-light text-center italic lg:tracking-widest select-none">
				{age} years old, Competitive Programmer, Game Developer and Web
				Developer
			</footer>

			<div className="my-4"></div>
			<div className="flex lg:flex-row flex-col justify-between">
				<Region title={"About"} color="bg-slate-900">
					<div className="flex flex-col lg:overflow-scroll masked-overflow lg:max-h-[50vh]">
						<div className="flex flex-col justify-between">
							<Region title={"Education"} color="bg-slate-800">
								I{"'"}m an aspired high school student in Taiwan currently
								creating a few computer science projects.
							</Region>
							<Region title={"Interests"} color="bg-slate-800">
								I&apos;m interested in competitive programming, web development,
								and hardware design.
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
									<TableCell>3/5</TableCell>
								</TableRow>
							</Table>
							<span className="italic my-2">
								GEPT stands for General English Proficiency Test(全民英檢). APCS
								stands for Advanced Placement Computer
								Science(大學程式設計先修檢測).
							</span>
						</Region>
						<Region title={"Projects"} color="bg-slate-900">
							To be added.
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
			</div>
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
