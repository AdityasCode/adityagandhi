import { getPosts } from "@/app/utils/utils";
import { baseURL } from "@/app/resources";

const absoluteUrl = (path: string) => new URL(path, baseURL).toString();

export default async function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: absoluteUrl(`/work/${post.slug}`),
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["/", "/about", "/work", "/blog", "/gallery"].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works];
}
