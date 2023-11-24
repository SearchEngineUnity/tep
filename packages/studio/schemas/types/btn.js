export default {
  name: 'btn',
  title: 'Button content',
  type: 'object',
  fields: [
    {
      name: 'idTag',
      title: 'Button ID',
      type: 'string',
      description:
        'Add ID to the button. Please only use alphanumeric characters and hypen and do no start the string with a number.',
    },
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      description: 'Only one link can be added.',
      type: 'array',
      of: [
        { type: 'internalLocal' },
        { type: 'internalGlobal' },
        { type: 'externalLink' },
        { type: 'affiliateLink' },
        { type: 'jumpLink' },
      ],
      validation: (Rule) => [Rule.length(1).warning('Must contain only one item')],
    },
  ],
  preview: {
    select: {
      text: 'text',
      id: 'idTag',
    },
    prepare({ text, id }) {
      return {
        title: text,
        subtitle: `ID: ${id}`,
      };
    },
  },
};
