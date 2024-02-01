import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { GetStaticPaths, GetStaticProps } from "next";
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

type Props = {
  post: PostForPostPage;
  prevPost: RelatedPostForPostLayout;
  nextPost: RelatedPostForPostLayout;
};

export default function PostPage({ post, prevPost, nextPost }) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div
      className="post-page p-6 pt-20 dark:bg-zinc-800 shadow-lg font-serif bg-amber-50 text-zinc-800 dark:text-yellow-50"
      style={{ minHeight: "100dvh", maxWidth: "100vw" }}
    >
      <Head>
        <title>Algasami | {post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PostLayout post={post} prevPost={prevPost} nextPost={nextPost}>
          <MDXContent />
        </PostLayout>
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map((post) => post.path);
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const postIndex = allPostsNewToOld.findIndex(
    (post) => post.slug === params?.slug
  );
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
    props: {
      post,
      prevPost,
      nextPost,
    },
  };
};
