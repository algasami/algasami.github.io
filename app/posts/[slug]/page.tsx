import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import PostLayout, {
  PostForPostLayout,
  RelatedPostForPostLayout,
} from "../../components/postLayout";
import { allPostsNewToOld } from "../../components/contentLayerAdapter";
import { Metadata, ResolvingMetadata } from "next";
import { NoSsr } from "@mui/material";

type PostForPostPage = PostForPostLayout & {
  title: string;
  description: string;
  body: {
    code: string;
  };
};

export function generateStaticParams() {
  const arr = allPostsNewToOld.map((post) => ({
    slug: post.slug,
  }));
  return arr.length === 0 ? [{ slug: "not-found" }] : arr;
}

type TProps = { params: { slug: string } };
export function generateMetadata(
  { params }: TProps,
  parent: ResolvingMetadata
): Metadata {
  const { post, prevPost, nextPost, notFound } = buildProps(params.slug);
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
  const { post, prevPost, nextPost, notFound } = buildProps(params.slug);
  const MDXContent = useMDXComponent(notFound ? "# NOT FOUND" : post.body.code);
  return (
    <div
      className="post-page p-6 pt-20 dark:bg-zinc-800 max-w-[90vw] lg:max-w-[50vw] shadow-lg font-serif bg-amber-50 text-zinc-800 dark:text-yellow-50"
      style={{ minHeight: "100dvh" }}
    >
      <Head>
        <title>Algasami | {notFound ? "NOT FOUND" : post.title}</title>
        <meta
          name="description"
          content={notFound ? "NOT FOUND" : post.description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NoSsr>
        <main>
          {notFound ? (
            <></>
          ) : (
            <PostLayout
              post={post}
              prevPost={prevPost}
              nextPost={nextPost}
              locale={"en_US"}
            >
              <MDXContent />
            </PostLayout>
          )}
        </main>
      </NoSsr>
    </div>
  );
}

const buildProps = (slug: string) => {
  const postIndex = allPostsNewToOld.findIndex((post) => post.slug === slug);
  if (postIndex === -1) {
    return {
      notFound: true,
    };
  }
  const prevFull = allPostsNewToOld[postIndex + 1] || null;
  const prevPost: RelatedPostForPostLayout = prevFull
    ? { title: prevFull.title, path: prevFull.path }
    : null;
  const nextFull = allPostsNewToOld[postIndex - 1] || null;
  const nextPost: RelatedPostForPostLayout = nextFull
    ? { title: nextFull.title, path: nextFull.path }
    : null;
  const postFull = allPostsNewToOld[postIndex];
  const post: PostForPostPage = {
    title: postFull.title,
    date: postFull.date,
    description: postFull.description,
    body: {
      code: postFull.body.code,
    },
  };

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    post,
    prevPost,
    nextPost,
  };
};
