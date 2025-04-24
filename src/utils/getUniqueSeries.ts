import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import postFilter from "./postFilter";

interface Series {
  series: string;
  seriesName: string;
  title?: string;
  description?: string;
  postCount: number;
}

const getUniqueSeries = async (posts: CollectionEntry<"blog">[]) => {
  const filteredPosts = posts
    .filter(postFilter)
    .filter(post => post.data.series);

  // Get all series from the series collection
  const seriesCollection = await getCollection("series");

  // Create a map of series name to series data for quick lookup
  const seriesMap = new Map();
  seriesCollection.forEach(seriesEntry => {
    seriesMap.set(seriesEntry.data.name, {
      title: seriesEntry.data.title,
      description: seriesEntry.data.description,
    });
  });

  const seriesArray: Series[] = filteredPosts
    .map(post => {
      const seriesName = post.data.series!.name;
      const seriesData = seriesMap.get(seriesName) || {};

      return {
        series: slugifyStr(seriesName),
        seriesName: seriesName,
        title: seriesData.title,
        description: seriesData.description,
      };
    })
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
