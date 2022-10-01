import Head from "next/head";

export default function Layout({ children, slug }) {
	const title = "Algasami" + (slug ? " | " + slug : "");
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className="w-screen h-screen flex flex-row justify-center">
				{children}
			</div>
		</>
	);
}
