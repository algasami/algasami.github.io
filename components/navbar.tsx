import { Box } from "@mui/system";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import { IconButton, Link, Modal } from "@mui/material";
import React from "react";
import ThemeSwitch from "./themeSwitch";

const LinkList = [
	{ name: "Home", link: "/" },
	{ name: "Development", link: "/dev" },
	{ name: "Posts", link: "/posts" },
];

export function DynamicLink({ href, name }) {
	return (
		<Link
			className="font-bold no-underline"
			style={{ textDecoration: "none" }}
			href={href}
		>
			<span className="dynamic-link">{name}</span>
		</Link>
	);
}

function genList(className: string) {
	return LinkList.map((s) => {
		return (
			<div key={s.link} className={className + " flex flex-col justify-center"}>
				<DynamicLink href={s.link} name={s.name} />
			</div>
		);
	});
}

function NavIcon({ size }) {
	return (
		<Link href="/">
			<NearMeRoundedIcon fontSize={size} />
		</Link>
	);
}

function BigNav() {
	return (
		<nav className="flex flex-row justify-between">
			<div className="flex flex-row">
				<span className="flex flex-col justify-center mr-1 text-black dark:text-zinc-50">
					ALGASAMI
				</span>
				{genList("mx-2")}
			</div>
			<div className="flex flex-row">
				<ThemeSwitch />
			</div>
		</nav>
	);
}

// Mobile nav bar:
// Opens a modal on trigger
function SmallNav() {
	const [open, setOpen] = React.useState(false);
	function onClick() {
		setOpen(true);
	}
	function onClose() {
		setOpen(false);
	}
	return (
		<nav className="flex flex-row justify-between">
			<div className="flex flex-col justify-center">
				<IconButton aria-label="navigate" color="primary" onClick={onClick}>
					<NearMeRoundedIcon fontSize="large" />
				</IconButton>
			</div>
			<div className="flex flex-col justify-center">
				<ThemeSwitch />
			</div>
			<Modal
				open={open}
				onClose={onClose}
				className="flex content-center justify-center"
				style={{ top: "25%" }}
			>
				<Box
					className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 shadow-lg shadow-zinc-700 border border-zinc-400"
					style={{
						maxHeight: "40vh",
						minHeight: "20vh",
						minWidth: "40vw",
						maxWidth: "70vw",
						zIndex: 2,
					}}
				>
					<div className="p-2 w-auto h-auto flex flex-col text-center">
						<h2>Menu</h2>
						{genList("text-xl font-bold")}
					</div>
				</Box>
			</Modal>
		</nav>
	);
}
export default function Navbar({}) {
	return (
		<div className="navbar absolute z-50 bg-lime-50 dark:bg-zinc-800 w-full shadow-xl p-2">
			<Box sx={{ display: { xs: "none", sm: "block" } }}>
				<BigNav />
			</Box>
			<Box sx={{ display: { xs: "block", sm: "none" } }}>
				<SmallNav />
			</Box>
		</div>
	);
}
