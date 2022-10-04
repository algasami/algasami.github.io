import Head from "next/head";
import Navbar from "./navbar";

export default function Layout({ children, slug }) {
	const title = "Algasami" + (slug ? " | " + slug : "");
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Navbar />
			<div className="w-screen h-screen flex flex-row justify-center z-10">
				{children}
			</div>
		</>
	);
}
