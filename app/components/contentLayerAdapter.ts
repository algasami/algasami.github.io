import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const allPostsNewToOld =
  allPosts?.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))) ||
  [];

export const allTags = allPosts.reduce((acc, post) => {
  post.tags.forEach((_tag) => {
    const tag = _tag.toLowerCase(); // case insensitive
    if (!acc.includes(tag)) {
      acc.push(tag);
    }
  });
  return acc;
}, []);
