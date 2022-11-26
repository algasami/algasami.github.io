import React from "react";

export default function Hallway() {
	return (
		<div
			className="max-w-max h-full flex flex-col justify-center"
			style={{ maxWidth: "80vw" }}
		>
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

			{/* <Particles
				options={ParticlePresets.stellar}
				init={particlesInit}
				loaded={particlesLoaded}
			/> */}
		</div>
	);
}
