import {
	NoSsr,
	Table,
	TableCell,
	TableRow,
} from "@mui/material";
import React from "react";
import updates from "../data/updates.json";

export default function Hallway({ updateList }: { updateList: Array<{ feature: string, dev: string, date: string }> }) {
	return (
		<div className="max-w-max h-full flex flex-col justify-center" style={{ maxWidth: "80vw" }}>
			<h1 className="font-light text-center m-4 lg:tracking-widest select-none bg-clip-text text-transparent from-amber-400 to-violet-200 via-fuchsia-500 bg-gradient-to-tr">
				ALGASAMI
			</h1>

			<footer className="font-light text-center italic lg:tracking-widest select-none">
				Competitive Programmer, Web Developer and Hardware Designer
			</footer>

			<div className="my-4"></div>
			<span className="text-center">
				This website is currently under construction! Coming soon :{")"}
			</span>

			<b className="w-full text-center">Temporary Logs</b>
			<hr />
			<NoSsr>
				<Table>
					<TableRow>
						<TableCell>Feature</TableCell>
						<TableCell>Dev in charge</TableCell>
						<TableCell>Date</TableCell>
					</TableRow>
					{updateList.map((v) => {
						return <TableRow key={v.feature}>
							<TableCell>{v.feature}</TableCell>
							<TableCell>{v.dev}</TableCell>
							<TableCell>{v.date}</TableCell>
						</TableRow>
					})}
				</Table>
			</NoSsr>

			{/* <Particles
				options={ParticlePresets.stellar}
				init={particlesInit}
				loaded={particlesLoaded}
			/> */}
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: {
			updateList: updates
		}
	}
}
