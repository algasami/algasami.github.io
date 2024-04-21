"use client";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import {
  allPostsNewToOld,
  allTags,
} from "../../components/contentLayerAdapter";
import { Region } from "../../components/region";
import React from "react";
import { Locale, i18n } from "i18n-config";
import { getDictionary } from "get-dictionary";

function useSelectedTags() {
  const [chosen_tags, set_chosen_tags] = React.useState<string[]>([]);
  return { chosen_tags, set_chosen_tags };
}

function PostNav({
  title,
  subtitle,
  tags,
  color,
  content,
  buttonName,
  link,
}: {
  title: string;
  subtitle: string;
  tags: string[];
  color: string;
  content: string;
  buttonName: string;
  link: string;
}) {
  const lower_tags = tags.map((v) => v.toLowerCase());
  return (
    <div className="timelinecomponent" key={title}>
      <Region title={title} color={color} subtitle={subtitle}>
        <ul className="flex flex-row flex-wrap">
          {lower_tags.map((tag) => {
            return (
              <li
                key={tag}
                className={`tag-button ${tag} bg: min-w-[3em] dark:bg-amber-600 bg-amber-300 text-center p-1 m-1 rounded-lg transition-all shadow-lg`}
              >
                {tag}
              </li>
            );
          })}
        </ul>
        {content}
        {/* link icon followed by timelineitem's link */}
        {link && (
          <Link style={{ textDecoration: "none" }} href={link}>
            <button className="py-2 px-2 my-2 bg-amber-400 transition-all hover:shadow-lg hover:bg-violet-200 text-zinc-900 rounded-lg w-max font-semibold">
              {buttonName}
            </button>
          </Link>
        )}
      </Region>
    </div>
  );
}

export default function PostPage({ params }: { params: { lang: Locale } }) {
  const dict = getDictionary(params.lang).posts;
  const { chosen_tags, set_chosen_tags } = useSelectedTags();
  let possible_tags = [];
  const current_posts = filtered_posts(params.lang, chosen_tags);
  for (const post of current_posts) {
    for (const _t of post.tags) {
      const t = _t.toLowerCase();
      if (!possible_tags.includes(t)) {
        possible_tags.push(t);
      }
    }
  }
  return (
    <main className="post-page hallway-size max-w-[80vw] lg:max-w-[60vw]">
      <h1 className="text-center">{dict.title}</h1>
      <div className="post-tags flex flex-row flex-wrap justify-center">
        {allTags.map((tag) => {
          if (!possible_tags.includes(tag)) {
            return null;
          }
          return (
            <button
              className={`tag-button ${
                chosen_tags.includes(tag)
                  ? "dark:bg-amber-600 bg-amber-300"
                  : "dark:bg-violet-600 bg-violet-300 dark:hover:bg-gray-400 hover:bg-gray-200"
              } min-w-[3em]  p-1 m-1 rounded-lg transition-all hover:shadow-lg`}
              key={tag}
              onClick={() => {
                if (chosen_tags.includes(tag)) {
                  set_chosen_tags(chosen_tags.filter((t) => t !== tag));
                } else {
                  set_chosen_tags([...chosen_tags, tag]);
                }
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <div className="flex flex-row justify-center">
        <ul className="grid grid-flow-row">
          {current_posts.map((post) => {
            return (
              <PostNav
                title={post.title}
                subtitle={format(parseISO(post.date), "LLLL d, yyyy")}
                tags={post.tags}
                color="bg-slate-900"
                content={post.description}
                buttonName="Go to"
                link={`/${params.lang}${post.path}`}
                key={post.slug}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
}

function filtered_posts(lang: Locale, tags: string[]) {
  return allPostsNewToOld.filter((post) => {
    if (lang !== post.lang) return;

    let hasalltags = true;
    const lower_tags = post.tags.map((v) => v.toLowerCase());
    for (const tag of tags) {
      if (!lower_tags.includes(tag)) {
        hasalltags = false;
        break;
      }
    }
    return hasalltags;
  });
}
