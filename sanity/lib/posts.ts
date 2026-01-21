import { sanity } from './sanity'
import type { Post } from './types'

export async function getLatestPosts(): Promise<Post[]> {
  return sanity.fetch(`
    *[_type == "post" && defined(publishedAt)]
    | order(publishedAt desc)[0..9]{
      title,
      slug,
      excerpt,
      externalLinks,
      publishedAt,
      body,
      mainImage
    }
  `)
}