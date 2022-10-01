import { useSpring, animated } from "@react-spring/web";

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
			className="px-8 lg:px-2 h-full flex flex-col justify-center select-none"
			style={{ ...springs }}
		>
			<h1 className="font-extralight text-center m-2 lg:tracking-widest">
				ALGASAMI
			</h1>

			<footer className="font-light text-center italic lg:tracking-widest select-none">
				Competitive Programmer, Web Developer and Hardware Designer
			</footer>

			<div className="my-8"></div>
			<span className="text-center">
				This website is currently under construction! Coming soon :{")"}
			</span>
		</animated.div>
	);
}
