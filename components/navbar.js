import { Box } from "@mui/system";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import { Link } from "@mui/material";

const LinkList = [
	{ name: "home", link: "/" },
	{ name: "dev", link: "/dev" },
];

function DynamicLink({ href, name }) {
	return (
		<Link className="font-bold no-underline" href={href}>
			<span className="dynamic-link ">{name}</span>
		</Link>
	);
}

function genList(className) {
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

function SmallNav() {
	return (
		<div>
			<NearMeRoundedIcon fontSize="large" />
		</div>
	);
}
export default function Navbar({}) {
	return (
		<div className="navbar absolute bg-zinc-800 w-full shadow-xl p-2">
			<Box sx={{ display: { xs: "none", sm: "block" } }}>
				<BigNav />
			</Box>
			<Box sx={{ display: { xs: "block", sm: "none" } }}>
				<SmallNav />
			</Box>
		</div>
	);
}
