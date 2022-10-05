import { animated, useSpring } from "@react-spring/web";
import Head from "next/head";
import React from "react";
import Navbar from "./navbar";

export default function Layout({ children, slug }: { children: React.ReactNode, slug?: string }) {
	const title = "Algasami" + (slug ? " | " + slug : "");
	const springs = useSpring({
		from: { opacity: 0, right: "-50vw" },
		to: { opacity: 1, right: "0vw" },
		config: {
		},
		delay: 200,
	});
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className="w-screen h-screen overflow-x-hidden flex flex-col justify-start z-10">
				<Navbar />

				<animated.div className="relative flex flex-row justify-center h-screen z-10" style={{ ...springs }}>
					{children}
				</animated.div>
			</div>
		</>
	);
}
