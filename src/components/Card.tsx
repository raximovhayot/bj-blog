import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, series } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };
  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <div className="flex items-center gap-2">
        <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
        {series && (
          <a
            href={`/series/${slugifyStr(series.name)}/`}
            className="rounded-full bg-skin-accent px-2 py-0.5 text-xs text-skin-inverted hover:bg-skin-accent-hover transition-colors duration-200"
          >
            {series.name} #{series.order}
          </a>
        )}
      </div>
      <p>{description}</p>
    </li>
  );
}
