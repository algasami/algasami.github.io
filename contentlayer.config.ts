import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `content/posts/**/*.mdx`,
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
		date: {
			type: "date",
			required: true,
		},
	},
	computedFields: {
		path: {
			type: "string",
			resolve: (post) => `/posts/${post.slug}`,
		},
	},
}));

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Post],
	mdx: { rehypePlugins: [[rehypePrism, { ignoreMissing: true }]] },
});
