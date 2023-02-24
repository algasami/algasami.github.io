import { useEffect, useState } from "react";

export const useThemeHook = () => {
	const [theme, setTheme] = useState<"dark" | "light">("dark");
	const setMiddlewareTheme = (theme: "dark" | "light") => {
		setTheme(theme);
		localStorage.setItem("theme", theme);
		if (theme === "dark") {
			document.querySelector("html").classList.add("dark");
		} else {
			document.querySelector("html").classList.remove("dark");
		}
	};
	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme === "dark") setMiddlewareTheme("dark");
		else setMiddlewareTheme("light");
	}, []);

	return { theme, setTheme: setMiddlewareTheme };
};
