import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

interface Series {
  series: string;
  seriesName: string;
  title?: string;
  description?: string;
  postCount: number;
}

const getUniqueSeries = (posts: CollectionEntry<"blog">[]) => {
  const filteredPosts = posts
    .filter(postFilter)
    .filter(post => post.data.series);

  const seriesArray: Series[] = filteredPosts
    .map(post => ({
      series: slugifyStr(post.data.series!.name),
      seriesName: post.data.series!.name,
      title: post.data.series!.title,
      description: post.data.series!.description,
    }))
    .filter(
      (value, index, self) =>
        self.findIndex(series => series.series === value.series) === index
    )
    .map(seriesItem => {
      // Count posts for this series
      const count = filteredPosts.filter(
        post => slugifyStr(post.data.series!.name) === seriesItem.series
      ).length;

      return {
        ...seriesItem,
        postCount: count,
      };
    })
    .sort((seriesA, seriesB) => seriesA.series.localeCompare(seriesB.series));

  return seriesArray;
};

export default getUniqueSeries;
