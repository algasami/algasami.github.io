import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
				<meta name="title" content="Algasami" />
				<meta
					name="description"
					content="Hello there. I'm Algasami, a programmer, game developer and web developer"
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.algasami.com/" />
				<meta property="og:title" content="Algasami" />
				<meta
					property="og:description"
					content="Hello there. I'm Algasami, a programmer, game developer and web developer"
				/>
				<meta
					property="og:image"
					content="https://i.pinimg.com/originals/f2/69/b8/f269b8bab77f4224428c10df537d0340.jpg"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.algasami.com/" />
				<meta property="twitter:title" content="Algasami" />
				<meta
					property="twitter:description"
					content="Hello there. I'm Algasami, a programmer, game developer and web developer"
				/>
				<meta
					property="twitter:image"
					content="https://i.pinimg.com/originals/f2/69/b8/f269b8bab77f4224428c10df537d0340.jpg"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
