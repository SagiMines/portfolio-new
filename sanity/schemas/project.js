import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    }),
    defineField({
      name: 'index',
      title: 'Index',
      description: 'Index of the project',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
      name: 'linkToServer',
      title: 'LinkToServer',
      type: 'url',
    }),
    defineField({
      name: 'linkToClient',
      title: 'LinkToClient',
      type: 'url',
    }),
    defineField({
      name: 'linkToDemo',
      title: 'LinkToDemo',
      type: 'url',
    }),
  ],
  orderings: [
    {
      name: 'sortByIndex',
      title: 'SortByIndex',
      by: [{field: 'index', direction: 'desc'}],
    },
  ],
})
