import "../styles/globals.scss";
import "typeface-roboto";
import Layout from "../components/layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Background from "../components/background";
import { animated, useSpring } from "@react-spring/web";
import React from "react";
import { NoSsr } from "@mui/material";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});
function MyApp({ Component, pageProps }) {
	const getLayout =
		Component.getLayout || ((page: React.ReactNode) => <Layout>{page}</Layout>);
	return (
		<div>
			<NoSsr>
				<ThemeProvider theme={darkTheme}>
					<div>{getLayout(<Component {...pageProps} />)}</div>
				</ThemeProvider>

				<Background />
			</NoSsr>
		</div>
	);
}

export default MyApp;
