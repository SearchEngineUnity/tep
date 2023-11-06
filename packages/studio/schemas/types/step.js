import { BiChevronDownSquare } from 'react-icons/bi';

export default {
  name: 'step',
  title: 'Step',
  type: 'object',
  icon: BiChevronDownSquare,
  fields: [
    {
      name: 'title',
      title: 'Step title',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'text',
      title: 'Step Text',
      type: 'minPT',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
