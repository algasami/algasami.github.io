import { allPostsNewToOld } from "app/components/contentLayerAdapter";
import { RelatedPostForPostLayout } from "app/components/postLayout";
import { Locale } from "i18n-config";

export const buildProps = (slug: string, lang: Locale) => {
  const filteredPosts = allPostsNewToOld.filter((p) => p.lang === lang);
  const postIndex = filteredPosts.findIndex((p) => p.slug == slug);
  if (postIndex === -1) {
    return {
      notFound: true,
    };
  }
  const postFull = filteredPosts[postIndex];
  const post = {
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
