import { useSpring, animated } from "@react-spring/web";

function BackgroundBlock({ id }) {
	const style = useSpring({
		from: {
			width: "100vw",
			height: "10vh",
			backgroundColor: `rgb(${id * 40},0,255)`,
			opacity: 0,
		},
		to: {
			width: `${(id + 1) * 20}vw`,
			height: `${(id + 1) * 20}vh`,
			opacity: (5 - id) / 5,
		},
		config: {
			mass: 6,
			friction: 45,
			tension: 300,
		},
		delay: id * 100,
	});
	return (
		<animated.div
			className="-z-10 bg-opacity-5 absolute"
			key={id}
			style={{ ...style }}
		></animated.div>
	);
}

export default function Background() {
	return (
		<div className="overflow-hidden -z-10 w-screen h-screen absolute top-0 right-0">
			{[0, 1, 2, 3, 4].map((v, i) => {
				return <BackgroundBlock key={v} id={v} />;
			})}
		</div>
	);
}
