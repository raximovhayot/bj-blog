# Backend Journey Blog Guidelines

## Project Overview

Backend Journey is a technical blog focused on backend development, security, and related topics. The blog is built using the Astro framework with the AstroPaper theme, providing a fast, responsive, and SEO-friendly platform for publishing technical content in Uzbek language.

### Key Features

- **Fast and Responsive**: Built with Astro and optimized for performance
- **SEO-friendly**: Includes metadata, OG images, and other SEO features
- **Light and Dark Mode**: Supports both light and dark themes
- **Search Functionality**: Allows users to search for content
- **Tags and Categories**: Content is organized with tags for easy navigation
- **RSS Feed**: Provides an RSS feed for subscribers

## Setup Instructions

### Prerequisites

- Node.js 18 or higher
- Git

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/uzinfowebuz/bj-blog.git
   cd bj-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the development server at http://localhost:4321

### Using Docker

You can also use Docker for development:

```bash
docker compose up -d
```

This will start the development server at http://localhost:4321

## Content Creation Guidelines

### Creating a New Blog Post

1. Create a new Markdown file in the `src/content/blog/` directory with a descriptive filename using kebab-case (e.g., `new-article-name.md`).

2. Add the required frontmatter at the top of the file:

```yaml
---
title: Your Article Title
author: Your Name
pubDatetime: 2024-03-01T10:00:00Z
modDatetime: 2024-03-01T10:00:00Z  # Optional, only if modified
slug: your-article-slug  # Optional, defaults to filename
featured: false  # Optional, set to true to feature on homepage
draft: false  # Optional, set to true for unpublished drafts
tags:
  - tag1
  - tag2
description: A brief description of your article (required for SEO)
series:  # Optional, for posts that are part of a series
  name: "Series Name"  # Name of the series
  order: 1  # Order of this post in the series (1, 2, 3, etc.)
---
```

3. Write your content in Markdown format below the frontmatter.

### Frontmatter Fields

| Field | Description | Required |
|-------|-------------|----------|
| title | The title of your article | Yes |
| description | A brief description (for SEO and excerpts) | Yes |
| pubDatetime | Publication date and time in ISO 8601 format | Yes |
| modDatetime | Modification date and time (only if article is updated) | No |
| author | The author's name | No (defaults to site author) |
| slug | URL slug for the article | No (defaults to filename) |
| featured | Whether to feature the article on the homepage | No (defaults to false) |
| draft | Whether the article is a draft | No (defaults to false) |
| tags | Keywords related to the article | No (defaults to "others") |
| series | Object containing series information (name and order) | No |
| series.name | Name of the series this post belongs to | Required if series is used |
| series.order | Order of this post in the series (1, 2, 3, etc.) | Required if series is used |
| series.title | Title of the series (for display purposes) | Optional |
| series.description | Description of the series | Optional |

### Creating a Series of Posts

To create a series of related posts, add the `series` field to the frontmatter of each post in the series:

```yaml
series:
  name: "Your Series Name"  # Use the same name for all posts in the series
  order: 1  # The order of this post in the series (1, 2, 3, etc.)
  title: "Display Title for Your Series"  # Optional, for display purposes
  description: "A brief description of what this series covers"  # Optional
```

Posts in the same series will be:
- Marked with a series badge in post listings
- Display a series navigation box at the end of each post
- Allow readers to easily navigate between posts in the series

Make sure to use the exact same series name for all posts in a series and assign the correct order number to each post.

### Adding a Table of Contents

To add a table of contents to your article, add the following line where you want it to appear:

```markdown
## Mundarija
```

### Headings

Since the article title is already an H1 heading, use H2-H6 for all headings within your content:

```markdown
## Main Section (H2)
### Subsection (H3)
#### Sub-subsection (H4)
```

### Images

#### Storing Images

It's recommended to store images in the `src/assets/` directory. Images in this directory are automatically optimized by Astro.

#### Using Images in Markdown

To use images in your Markdown content:

```markdown
![Alt text](@assets/images/your-image.jpg)

<!-- OR -->

![Alt text](../../assets/images/your-image.jpg)
```

Note: Compress images before uploading to improve site performance.

#### OG Images

For social media sharing, you can specify an OG image in the frontmatter. The recommended size is 1200 x 640 pixels.

## Deployment Process

The blog is built using Astro and can be deployed to various platforms.

### Building for Production

```bash
npm run build
```

This will generate a static site in the `dist/` directory.

### Deployment Options

1. **Static Hosting**: Upload the contents of the `dist/` directory to any static hosting service like Netlify, Vercel, GitHub Pages, etc.

2. **Continuous Deployment**: Set up continuous deployment with GitHub Actions or similar services to automatically build and deploy the site when changes are pushed to the repository.

## Contribution Guidelines

### Code Contributions

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes
4. Run tests and ensure the site builds correctly
5. Submit a pull request with a clear description of your changes

### Content Contributions

1. Follow the content creation guidelines above
2. Ensure your content is accurate, well-formatted, and free of grammatical errors
3. Submit a pull request with your new or updated content

### Style Guide

- Use clear, concise language
- Include code examples where appropriate
- Use proper formatting for code blocks, quotes, and other elements
- Include references and links to sources where applicable

## Technical Stack

- **Framework**: Astro
- **Component Library**: React
- **Styling**: TailwindCSS
- **Search**: FuseJS
- **Formatting**: Prettier
- **Linting**: ESLint
- **Deployment**: Static hosting (Netlify, Vercel, etc.)

## Additional Resources

- [Astro Documentation](https://docs.astro.build/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [AstroPaper Theme Documentation](https://github.com/satnaing/astro-paper)
