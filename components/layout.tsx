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
	return (
		<>
			<Head>
				<title>{title}</title>
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
