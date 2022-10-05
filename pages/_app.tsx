import "../styles/globals.scss";
import "typeface-roboto";
import Layout from "../components/layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Background from "../components/background";
import { animated, useSpring } from "@react-spring/web";
import React from "react";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});
function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page: React.ReactNode) => <Layout>{page}</Layout>);
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
		<div>
			<ThemeProvider theme={darkTheme}>
				<animated.div style={{ ...springs }}>
					{getLayout(<Component {...pageProps} />)}
				</animated.div>
			</ThemeProvider>

			<Background />
		</div>
	);
}

export default MyApp;
