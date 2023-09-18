import { format, parseISO } from "date-fns";
import Link from "next/link";
import { allPostsNewToOld } from "../../components/contentLayerAdapter";
import { Region } from "../../components/region";

function postNav({
	title,
	subtitle,
	color,
	content,
	buttonName,
	link,
	key,
}: {
	title: string;
	subtitle: string;
	color: string;
	content: string;
	buttonName: string;
	link: string;
	key: string;
}) {
	return (
		<div className="timelinecomponent" key={title}>
			<Region title={title} color={color} subtitle={subtitle}>
				{content}
				{/* link icon followed by timelineitem's link */}
				{link && (
					<Link style={{ textDecoration: "none" }} href={link} key={key}>
						<button className="py-2 px-2 my-2 bg-amber-400 transition-all hover:shadow-lg hover:bg-violet-200 text-zinc-900 rounded-lg w-max font-semibold">
							{buttonName}
						</button>
					</Link>
				)}
			</Region>
		</div>
	);
}

export default function Post({ posts }: { posts: any[] }) {
	return (
		<div
			className="post-page pt-16"
			style={{
				minWidth: "40vw",
				maxWidth: "60vw",
			}}
		>
			<h1>Post</h1>
			<footer>Work-in-progress...</footer>
			<ul className="grid grid-flow-row">
				{posts.map((post) => {
					return postNav({
						title: post.title,
						subtitle: format(parseISO(post.date), "LLLL d, yyyy"),
						color: "bg-slate-900",
						content: post.description,
						buttonName: "Go to",
						link: post.path,
						key: post.slug,
					});
				})}
			</ul>
		</div>
	);
}

export function getStaticProps() {
	const posts = allPostsNewToOld;
	return {
		props: {
			posts,
		},
	};
}
