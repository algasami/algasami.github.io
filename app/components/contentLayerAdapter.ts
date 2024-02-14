import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const allPostsNewToOld =
	allPosts?.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))) ||
	[];
