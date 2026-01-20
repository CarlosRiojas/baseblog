import { defineType, defineField, PortableTextBlock } from 'sanity'

export type Post = {
  title: string
  excerpt?: string
  publishedAt?: string
  externalLinks?: string[]
  slug?: {
    current: string
  }
  body?: PortableTextBlock[]
  mainImage?: any
  type: 'array',
  of: [
    { type: 'block' },
    {
        type:'object',
        name:'youtube',
        title:'YouTube',
        fields:[
            {
                name:'url',
                type:'url',
                title:'YouTube URL',
                validation: (rule) => 
                    rule.uri({
                        scheme: ['https'],
                        allowRelative: false,
                }),
            },
        ],
    },
  ],
}