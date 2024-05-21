"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import PostLayout from "../../../components/postLayout";
import { NoSsr } from "@mui/material";
import { Locale } from "i18n-config";
import {
  MdxH1,
  MdxH2,
  MdxH3,
  MdxH4,
  MdxH5,
  MdxH6,
  MdxA,
} from "app/components/mdxHeadings";
import { useEffect } from "react";
import { buildProps } from "./utils";
import { useHash } from "app/components/hash-utils";
import "katex/dist/katex.min.css";

type TProps = { params: { slug: string; lang: Locale } };

export default function PostSlugPage({ params }: TProps) {
  const { post, lang, prevPost, nextPost, notFound } = buildProps(
    params.slug,
    params.lang
  );
  const hash = useHash();
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (document === undefined) return;
      console.log(hash);
      let target = document.getElementById(hash);
      console.log(target);

      if (!target) return;

      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      return () => {
        clearTimeout(timeout);
      };
    }, 200);
  }, [hash]);
  const MDXContent = useMDXComponent(notFound ? "# NOT FOUND" : post.body.code);
  return (
    <div
      className="post-page hallway-size p-6 pt-20 dark:bg-zinc-800 shadow-lg font-serif bg-amber-50 text-zinc-800 dark:text-yellow-50"
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
              <MDXContent
                components={{
                  h1: MdxH1,
                  h2: MdxH2,
                  h3: MdxH3,
                  h4: MdxH4,
                  h5: MdxH5,
                  h6: MdxH6,
                  a: MdxA,
                }}
              />
            </PostLayout>
          )}
        </main>
      </NoSsr>
    </div>
  );
}
