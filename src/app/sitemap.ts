import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as enabledRoutes } from "@/app/resources";

const absoluteUrl = (path: string) => new URL(path, baseURL).toString();

export default async function sitemap() {
  const blogs = (enabledRoutes["/blog"] ? getPosts(["src", "app", "blog", "posts"]) : []).map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    ...(post.metadata.publishedAt ? { lastModified: post.metadata.publishedAt } : {}),
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: absoluteUrl(`/work/${post.slug}`),
    ...(post.metadata.publishedAt ? { lastModified: post.metadata.publishedAt } : {}),
  }));

  const routes = Object.entries(enabledRoutes).filter(([, enabled]) => enabled).map(([route]) => ({
    url: absoluteUrl(route),
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works];
}
