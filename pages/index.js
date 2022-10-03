import { useSpring, animated } from "@react-spring/web";
import {
	NoSsr,
	Table,
	TableCell,
	TableContainer,
	TableRow,
} from "@mui/material";

export default function Hallway() {
	const springs = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: {
			mass: 10,
			friction: 30,
			tension: 120,
		},
		delay: 200,
	});
	return (
		<animated.div
			className="px-8 lg:px-2 h-full flex flex-col justify-center"
			style={{ ...springs }}
		>
			<h1 className="font-extralight text-center m-2 lg:tracking-widest select-none">
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
				</Table>
			</NoSsr>

			{/* <Particles
				options={ParticlePresets.stellar}
				init={particlesInit}
				loaded={particlesLoaded}
			/> */}
		</animated.div>
	);
}
