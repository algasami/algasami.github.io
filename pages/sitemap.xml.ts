import { allPostsNewToOld } from "components/contentLayerAdapter";
import { Post } from "contentlayer/generated";

function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://algasami.github.io/</loc>
     </url>
     <url>
       <loc>https://algasami.github.io/posts</loc>
     </url>
     <url>
       <loc>https://algasami.github.io/graph</loc>
     </url>
     <url>
       <loc>https://algasami.github.io/dev</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`https://algasami.github.io/posts/${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(allPostsNewToOld);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
