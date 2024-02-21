import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';

export const GET = async ({site}) => {
  const posts = await getCollection("posts");

  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site,
    items: posts.map(({slug, data: {title, pubDate, description}}) => ({
      title,
      pubDate,
      description,
      link: `/posts/${slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
