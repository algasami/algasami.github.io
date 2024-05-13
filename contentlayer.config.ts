import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `app/content/posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
    lang: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (post: any) => `/posts/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "app/content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      rehypeCodeTitles,
      [rehypePrism, { ignoreMissing: true }],
    ] as any,
  },
});
