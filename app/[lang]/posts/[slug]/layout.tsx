import { allPostsNewToOld } from "app/components/contentLayerAdapter";
import { Locale } from "i18n-config";
import { Metadata, ResolvingMetadata } from "next";
import { buildProps } from "./utils";

type TProps = { params: { slug: string; lang: Locale } };
export function generateStaticParams({ params }: { params: { lang: Locale } }) {
  const arr = allPostsNewToOld
    .filter((p) => p.lang === params.lang)
    .map((post) => ({
      slug: `${post.slug}`,
    }));
  return arr.length === 0 ? [{ slug: "not-found" }] : arr;
}
export function generateMetadata(
  { params }: TProps,
  parent: ResolvingMetadata
): Metadata {
  const { post, prevPost, nextPost, notFound } = buildProps(
    params.slug,
    params.lang
  );
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | algasami`,
      description: post.description,
    },
    twitter: {
      title: `${post.title} | algasami`,
      description: post.description,
    },
  };
}

export default function PageLayout({ children }) {
  return <>{children}</>;
}
