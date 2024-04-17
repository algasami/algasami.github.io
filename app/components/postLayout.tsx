import Link from "next/link";
import formatDate from "./formatDate";
import PostBody from "./postBody";
import { Locale } from "i18n-config";

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
  locale: Locale;
};

export default function PostLayout({
  post,
  nextPost,
  prevPost,
  children,
  locale,
}: Props) {
  const { date, title } = post;
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
                  <time dateTime={date}>{formatDate(date)}</time>
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
                <Link href={prevPost.path} className="">
                  <div className="transition-colors dark:hover:text-yellow-100">
                    <button className="basis-6/12 flex flex-col">
                      <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400">
                        上一篇
                      </h2>
                      <div className="flex flex-row justify-start">
                        <Link
                          href={`/${locale}/${prevPost.path}`}
                          className="text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          <span>← {prevPost.title}</span>
                        </Link>
                      </div>
                    </button>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link href={`/${locale}/${nextPost.path}`}>
                  <div className="transition-colors dark:hover:text-yellow-100">
                    <button className="basis-6/12 flex flex-col">
                      <h2 className="mb-1 text-right text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400 sm:text-right">
                        下一篇
                      </h2>
                      <div className="flex flex-row justify-end">
                        <span>{nextPost.title} →</span>
                      </div>
                    </button>
                  </div>
                </Link>
              )}
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
