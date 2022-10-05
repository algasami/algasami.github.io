import {
	Badge,
	NoSsr,
	Table,
	TableCell,
	TableContainer,
	TableRow,
	Tooltip,
} from "@mui/material";
import React from "react";

export default function Hallway() {
	return (
		<div className="max-w-min px-8 lg:px-2 h-full flex flex-col justify-center">
			<h1 className="font-light text-center m-2 lg:tracking-widest select-none bg-clip-text text-transparent from-amber-400 to-violet-200 via-fuchsia-500 bg-gradient-to-tr">
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
					<TableRow>
						<TableCell>Background Update</TableCell>
						<TableCell>Algasami</TableCell>
						<TableCell>10/3, 2022</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Tooltip title="This update is unfinished.">
								<Badge badgeContent="!" color="warning">
									<div className="rounded-xl bg-pink-600 p-2">Aesthetics</div>
								</Badge>
							</Tooltip>
						</TableCell>
						<TableCell>Algasami</TableCell>
						<TableCell>10/4, 2022</TableCell>
					</TableRow>
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
