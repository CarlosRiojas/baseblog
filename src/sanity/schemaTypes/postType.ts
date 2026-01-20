// @ts-nocheck
import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType, Rule} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
       name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    { type: 'block' },
    {
      type: 'object',
      name: 'youtube',
      title: 'YouTube',
      fields: [
        {
          name: 'url',
          title: 'YouTube URL',
          type: 'url',
          validation: (rule: any) =>
            rule.uri({
              scheme: ['https'],
              allowRelative: false,
            }),
        },
      ],
    },
  ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
