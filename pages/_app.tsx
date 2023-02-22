import "../styles/globals.scss";
import "../styles/prism-adapter.scss";
import "../styles/prism-plus.css";
import "typeface-roboto";
import Layout from "../components/layout";
import React from "react";
import { NoSsr } from "@mui/material";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
	const getLayout =
		Component.getLayout || ((page: React.ReactNode) => <Layout>{page}</Layout>);
	return (
		<NoSsr>
			<ThemeProvider attribute="class">
				{getLayout(<Component {...pageProps} />)}
			</ThemeProvider>
		</NoSsr>
	);
}

export default MyApp;
