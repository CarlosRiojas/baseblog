import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type Post = {
  title: string
  excerpt?: string
  publishedAt?: string
  externalLinks?: string[]
  slug?: {
    current: string
  }
  body?: PortableTextBlock[]
  mainImage?: SanityImageSource
}