import { animated, useSpring } from "@react-spring/web";
import Head from "next/head";
import React from "react";
import Navbar from "./navbar";

export default function Layout({
	children,
	slug,
}: {
	children: React.ReactNode;
	slug?: string;
}) {
	const title = "Algasami" + (slug ? " | " + slug : "");
	const springs = useSpring({
		from: { opacity: 0, right: "0vw" },
		to: { opacity: 1, right: "0vw" },
		config: {},
		delay: 0,
	});
	const desc =
		"Hello there. I'm Algasami, a programmer, game developer and web developer";
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="title" content="Algasami" />
				<meta
					name="description"
					content="Hello there. I'm Algasami, a programmer, game developer and web developer"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.algasami.com/" />
				<meta property="og:title" content="Algasami" />
				<meta
					property="og:description"
					content="Hello there. I'm Algasami, a programmer, game developer and web developer"
				/>
				<meta
					property="og:image"
					content="https://i.pinimg.com/originals/f2/69/b8/f269b8bab77f4224428c10df537d0340.jpg"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.algasami.com/" />
				<meta property="twitter:title" content="Algasami" />
				<meta
					property="twitter:description"
					content="Hello there. I'm Algasami, a programmer, game developer and web developer"
				/>
				<meta
					property="twitter:image"
					content="https://i.pinimg.com/originals/f2/69/b8/f269b8bab77f4224428c10df537d0340.jpg"
				/>
			</Head>
			<div className="w-screen h-screen overflow-x-hidden flex flex-col justify-start z-10">
				<Navbar />

				<animated.div
					className="relative mt-16 sm:m-8 mb-auto flex flex-row justify-center z-10"
					style={{ ...springs }}
				>
					{children}
				</animated.div>
			</div>
		</>
	);
}
