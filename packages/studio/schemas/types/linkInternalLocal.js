export default {
  title: 'Internal Local Link',
  name: 'internalLocal',
  type: 'object',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{type: 'page'}, {type: 'soloGuidePage'}, {type: 'flexListingPage'}],
    },
    {
      name: 'hashId',
      title: 'Hash ID',
      type: 'string',
      description: 'Please enter the ID you would like to jump to. Do not include the # symbol.',
    },
    {
      name: 'parameter',
      title: 'Parameter(s)',
      type: 'string',
      description: 'Please enter all needed parameters for the link',
    },
    {
      title: 'Open in new tab?',
      name: 'newTab',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      link: 'reference.slug.current',
      id: 'hashId',
      parameter: 'parameter',
    },
    prepare({link, id, parameter}) {
      return {
        title: `/${link}${id ? `#${id}` : ''}${parameter ? `?${parameter}` : ''}`,
      }
    },
  },
}
