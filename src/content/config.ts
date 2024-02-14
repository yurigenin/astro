// Import utilities from `astro:content`
import {z as PropTypes, defineCollection} from "astro:content";

// Define a `type` and `schema` for each collection
const posts = defineCollection({
    type: 'content',
    schema: PropTypes.object({
      title: PropTypes.string(),
      pubDate: PropTypes.date(),
      description: PropTypes.string(),
      author: PropTypes.string(),
      image: PropTypes.object({
        url: PropTypes.string(),
        alt: PropTypes.string()
      }),
      tags: PropTypes.array(PropTypes.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts,
};