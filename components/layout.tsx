import Head from "next/head";
import React from "react";
import Navbar from "./navbar";

export default function Layout({ children, slug }: { children: React.ReactNode, slug?: string }) {
	const title = "Algasami" + (slug ? " | " + slug : "");
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className="w-screen h-screen flex flex-col justify-start z-10">
				<Navbar />

				<div className="flex flex-row justify-center h-screen z-10">
					{children}
				</div>
			</div>
		</>
	);
}
