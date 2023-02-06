export default {
  title: 'Table Plus',
  name: 'tablePlus',
  type: 'object',
  fields: [
    {
      name: 'rows',
      type: 'array',
      of: [{ type: 'rowPlus' }],
    },
  ],
};
