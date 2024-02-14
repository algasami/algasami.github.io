import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import PostLayout, {
  PostForPostLayout,
  RelatedPostForPostLayout,
} from "../../components/postLayout";
import { allPostsNewToOld } from "../../components/contentLayerAdapter";

type PostForPostPage = PostForPostLayout & {
  title: string;
  description: string;
  body: {
    code: string;
  };
};

export function generateStaticParams() {
  return allPostsNewToOld.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const { post, prevPost, nextPost } = await buildProps(params.slug);
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div
      className="post-page p-6 pt-20 dark:bg-zinc-800 max-w-[90vw] lg:max-w-[70vw] shadow-lg font-serif bg-amber-50 text-zinc-800 dark:text-yellow-50"
      style={{ minHeight: "100dvh" }}
    >
      <Head>
        <title>Algasami | {post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PostLayout
          post={post}
          prevPost={prevPost}
          nextPost={nextPost}
          locale={"en_US"}
        >
          <MDXContent />
        </PostLayout>
      </main>
    </div>
  );
}

const buildProps = async (slug: string) => {
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
