import "../styles/globals.scss";
import "../styles/prism-adapter.scss";
import "../styles/prism-plus.css";
import "typeface-roboto";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import { animated, useSpring } from "@react-spring/web";
import Footer from "../components/footer";
import { NoSsr } from "@mui/material";
function MyApp({ Component, pageProps }) {
	const springs = useSpring({
		from: { opacity: 0, right: "0vw" },
		to: { opacity: 1, right: "0vw" },
		config: {},
		delay: 0,
	});
	const desc =
		"Hello there. I'm Algasami, a programmer, game developer and web developer";
	// const [isLoading, setIsLoading] = useState(false);

	// useEffect(() => {
	// 	setIsLoading(true);

	// 	setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 50);
	// }, []);

	// if (isLoading) {
	// 	return <Preloader />;
	// }
	return (
		<>
			<NoSsr>
				<Head>
					<title>Algasami</title>
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
						<Component {...pageProps} />
					</animated.main>

					<Footer />
				</div>
			</NoSsr>
		</>
	);
}

export default MyApp;
