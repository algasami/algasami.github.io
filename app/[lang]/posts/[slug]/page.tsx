import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import PostLayout, {
  PostForPostLayout,
  RelatedPostForPostLayout,
} from "../../../components/postLayout";
import { allPostsNewToOld } from "../../../components/contentLayerAdapter";
import { Metadata, ResolvingMetadata } from "next";
import { NoSsr } from "@mui/material";
import { Locale } from "i18n-config";

type PostForPostPage = PostForPostLayout & {
  title: string;
  description: string;
  body: {
    code: string;
  };
};

export function generateStaticParams({ params }: { params: { lang: Locale } }) {
  const arr = allPostsNewToOld
    .filter((p) => p.lang === params.lang)
    .map((post) => ({
      slug: `${post.slug}`,
    }));
  return arr.length === 0 ? [{ slug: "not-found" }] : arr;
}

type TProps = { params: { slug: string; lang: Locale } };
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

export default function PostSlugPage({ params }: TProps) {
  const { post, lang, prevPost, nextPost, notFound } = buildProps(
    params.slug,
    params.lang
  );
  const MDXContent = useMDXComponent(notFound ? "# NOT FOUND" : post.body.code);
  return (
    <div
      className="post-page p-6 pt-20 dark:bg-zinc-800 max-w-[100vw] lg:max-w-[60vw] shadow-lg font-serif bg-amber-50 text-zinc-800 dark:text-yellow-50"
      style={{ minHeight: "100dvh" }}
    >
      <NoSsr>
        <main>
          {notFound ? (
            <></>
          ) : (
            <PostLayout
              post={post}
              prevPost={prevPost}
              nextPost={nextPost}
              locale={lang}
            >
              <MDXContent />
            </PostLayout>
          )}
        </main>
      </NoSsr>
    </div>
  );
}

const buildProps = (slug: string, lang: Locale) => {
  const filteredPosts = allPostsNewToOld.filter((p) => p.lang === lang);
  const postIndex = filteredPosts.findIndex((p) => p.slug == slug);
  if (postIndex === -1) {
    return {
      notFound: true,
    };
  }
  const postFull = filteredPosts[postIndex];
  const post: PostForPostPage = {
    title: postFull.title,
    date: postFull.date,
    description: postFull.description,
    body: {
      code: postFull.body.code,
    },
  };

  const prevFull = filteredPosts[postIndex + 1] || null;
  const prevPost: RelatedPostForPostLayout = prevFull
    ? { title: prevFull.title, path: prevFull.path }
    : undefined;
  const nextFull = filteredPosts[postIndex - 1] || null;
  const nextPost: RelatedPostForPostLayout = nextFull
    ? { title: nextFull.title, path: nextFull.path }
    : undefined;

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    post,
    lang: postFull.lang as Locale,
    prevPost,
    nextPost,
  };
};
