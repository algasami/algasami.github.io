import { Link } from "@mui/material";

export default function DevPage() {
	return (
		<div className="dev-page my-8">
			<h1>Dev Page</h1>I don{"'"}t know how you found me!
			<br />
			This is a small page for all my WIP routes, including
			<ul>
				<li>
					<Link href="/api">
						`<code>/api</code>`
					</Link>
				</li>
			</ul>
		</div>
	);
}
