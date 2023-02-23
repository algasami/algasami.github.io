import { animated, useSpring } from "@react-spring/web";
import Head from "next/head";
import React from "react";
import Footer from "./footer";
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
			</Head>
			<Navbar />
			<div
				className="w-screen h-screen overflow-x-hidden flex flex-col justify-start z-10"
				id="main-content"
			>
				<animated.main
					className="relative flex flex-row justify-center z-10"
					style={{ ...springs }}
				>
					{children}
				</animated.main>

				<Footer />
			</div>
		</>
	);
}
