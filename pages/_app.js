import "../styles/globals.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Layout from "../components/layout";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const options = {
	emitters: {
		startCount: 0,
		position: { x: 50, y: -10 },
		size: {
			width: 40,
			height: 10,
		},
		rate: {
			delay: 1,
			quantity: 2,
		},
		life: {
			duration: 0,
			count: 1,
		},
	},

	particles: {
		number: {
			value: 99,
			density: {
				enable: false,
				value_area: 500,
			},
		},
		color: {
			value: "#ffffff",
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000",
			},
			polygon: {
				nb_sides: 5,
			},
		},
		opacity: {
			value: 0.4,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: true,
				speed: 2,
				size_min: 0.3,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 32.06824121731046,
			color: "#ffffff",
			opacity: 0.2725800503471389,
			width: 1,
		},
		move: {
			enable: true,
			speed: 1.2,
			direction: "none",
			random: true,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: true,
				rotateX: 962.0472365193136,
				rotateY: 1362.9002517356944,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "grab",
			},
			onclick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 219.24838405820654,
				line_linked: {
					opacity: 0.2138826277948703,
				},
			},
			bubble: {
				distance: 250,
				size: 0,
				duration: 2,
				opacity: 0,
				speed: 3,
			},
			repulse: {
				distance: 400,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
};
function MyApp({ Component, pageProps }) {
	const particlesInit = async (engine) => {
		await loadFull(engine);
	};

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);
	const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
	return (
		<>
			{getLayout(<Component {...pageProps} />)}
			<Particles
				options={options}
				init={particlesInit}
				loaded={particlesLoaded}
			/>
		</>
	);
}

export default MyApp;
