import { format, parseISO } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import formatDate from "./formatDate";
import PostBody from "./postBody";

export interface PostForPostLayout {
	date: string;
	title: string;
}

export type RelatedPostForPostLayout = {
	title: string;
	path: string;
} | null;

type Props = {
	post: PostForPostLayout;
	nextPost: RelatedPostForPostLayout;
	prevPost: RelatedPostForPostLayout;
	children: React.ReactNode;
};

export default function PostLayout({
	post,
	nextPost,
	prevPost,
	children,
}: Props) {
	const { date, title } = post;

	const { locale } = useRouter();

	return (
		<article>
			<div className="divide-y divide-gray-200 transition-colors dark:divide-gray-700">
				<header className="py-6">
					<div className="space-y-1 text-center">
						<div className="mb-4">
							<h1>{title}</h1>
						</div>

						<dl className="space-y-10">
							<div>
								<dt className="sr-only">發佈時間</dt>
								<dd className="text-base font-medium leading-6 text-gray-500 transition-colors dark:text-gray-400">
									<time dateTime={date}>{formatDate(date, locale)}</time>
								</dd>
							</div>
						</dl>
					</div>
				</header>

				<div className="divide-y divide-gray-200 pt-10 pb-8 transition-colors dark:divide-gray-700">
					<PostBody>{children}</PostBody>
				</div>

				<div
					className="divide-y divide-gray-200 pb-8 transition-colors dark:divide-gray-700"
					// style={{ gridTemplateRows: 'auto 1fr' }}
				>
					<footer>
						<div className="flex flex-col gap-4 pt-4 text-base font-medium sm:flex-row sm:justify-between xl:gap-8 xl:pt-8">
							{prevPost ? (
								<div className="basis-6/12 flex flex-col">
									<h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400">
										上一篇
									</h2>
									<div className="flex flex-row justify-start">
										<Link
											href={prevPost.path}
											className="text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
										>
											<span>← {prevPost.title}</span>
										</Link>
									</div>
								</div>
							) : (
								<div />
							)}
							{nextPost && (
								<div className="basis-6/12 flex flex-col">
									<h2 className="mb-1 text-right text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400 sm:text-right">
										下一篇
									</h2>
									<div className="flex flex-row justify-end">
										<Link
											href={nextPost.path}
											className="block text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400 sm:text-right"
										>
											<span>{nextPost.title} →</span>
										</Link>
									</div>
								</div>
							)}
						</div>
					</footer>
				</div>
			</div>
		</article>
	);
}
