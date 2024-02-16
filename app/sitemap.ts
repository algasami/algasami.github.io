import { MetadataRoute } from "next";
import { allPostsNewToOld } from "./components/contentLayerAdapter";
type TDate =
  | "monthly"
  | "weekly"
  | "yearly"
  | "always"
  | "hourly"
  | "daily"
  | "never";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://algasami.github.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://algasami.github.io/posts",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://algasami.github.io/graph",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://algasami.github.io/dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ].concat(
    allPostsNewToOld.map((p) => {
      return {
        url: `https://algasami.github.io/posts/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      };
    })
  ) as {
    url: string;
    lastModified: Date;
    changeFrequency: TDate;
    priority: number;
  }[];
}
