import { Box } from "@mui/system";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import { IconButton, Link, Modal } from "@mui/material";
import React from "react";

const LinkList = [
	{ name: "Home", link: "/" },
	{ name: "Development", link: "/dev" },
	{ name: "Blog", link: "/blog" },
];

export function DynamicLink({ href, name }) {
	return (
		<Link
			className="font-bold no-underline"
			style={{ textDecoration: "none" }}
			href={href}
		>
			<span className="dynamic-link ">{name}</span>
		</Link>
	);
}

function genList(className: string) {
	return LinkList.map((s) => {
		return (
			<div key={s.link} className={className}>
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
		<div className="flex flex-row">
			<div className="mr-1">Navigation</div>
			<NavIcon size={"medium"} />
			{genList("mx-2")}
		</div>
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
		<div>
			<IconButton aria-label="navigate" color="primary" onClick={onClick}>
				<NearMeRoundedIcon fontSize="large" />
			</IconButton>
			<Modal
				open={open}
				onClose={onClose}
				className="flex content-center justify-center"
				style={{ top: "25%" }}
			>
				<Box
					className="bg-slate-700 rounded-lg p-4 shadow-lg shadow-zinc-700 border border-zinc-400"
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
		</div>
	);
}
export default function Navbar({}) {
	return (
		<div className="navbar absolute z-50 bg-zinc-800 w-full shadow-xl p-2">
			<Box sx={{ display: { xs: "none", sm: "block" } }}>
				<BigNav />
			</Box>
			<Box sx={{ display: { xs: "block", sm: "none" } }}>
				<SmallNav />
			</Box>
		</div>
	);
}
