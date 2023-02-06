export default {
  name: 'tocLink',
  type: 'object',
  title: 'ToC Menu Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'hashID',
      title: 'Hash ID',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'hashID',
    },
  },
};
