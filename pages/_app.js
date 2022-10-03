import "../styles/globals.scss";
import "typeface-roboto";
import Layout from "../components/layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Background from "../components/background";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
	return (
		<div>
			<ThemeProvider theme={darkTheme}>
				{getLayout(<Component {...pageProps} />)}
			</ThemeProvider>

			<Background />
		</div>
	);
}

export default MyApp;
