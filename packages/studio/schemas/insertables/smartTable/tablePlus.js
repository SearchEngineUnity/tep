export default {
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
