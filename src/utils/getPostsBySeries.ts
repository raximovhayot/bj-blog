import type { CollectionEntry } from "astro:content";
import getAscSortedPosts from "./getAscSortedPosts";
import { slugifyStr } from "./slugify";

const getPostsBySeries = (posts: CollectionEntry<"blog">[], series: string) =>
  getAscSortedPosts(
    posts.filter(
      post => post.data.series && slugifyStr(post.data.series.name) === series
    )
  );

export default getPostsBySeries;
