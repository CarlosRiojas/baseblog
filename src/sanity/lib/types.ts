import { defineType, defineField } from 'sanity'

export type Post = {
  title: string
  excerpt?: string
  publishedAt?: string
  externalLinks?: string[]
  slug?: {
    current: string
  }
  body?: string[]
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
                validation: (Rule) => 
                    Rule.uri({
                        scheme: ['https'],
                        allowRelative: false,
                }),
            },
        ],
    },
  ],
}