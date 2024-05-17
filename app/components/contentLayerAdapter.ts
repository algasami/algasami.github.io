import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const allPostsNewToOld =
  allPosts?.sort((a, b) => {
    if ((a.pinned === true && b.pinned === true) || (!a.pinned && !b.pinned)) {
      return compareDesc(new Date(a.date), new Date(b.date));
    }
    if (a.pinned) {
      return -1;
    }
    return 1;
  }) || [];

export const allTags = allPosts
  .reduce((acc, post) => {
    post.tags.forEach((_tag) => {
      const tag = _tag.toLowerCase().trim(); // case insensitive
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, [])
  .sort();
