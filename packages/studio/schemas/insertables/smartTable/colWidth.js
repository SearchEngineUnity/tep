import { AiOutlineColumnWidth } from 'react-icons/ai';

export default {
  name: 'colWidth',
  type: 'object',
  title: 'Minium Column Width',
  icon: AiOutlineColumnWidth,
  fields: [
    {
      name: 'width',
      type: 'string',
      title: 'Must end in "px" (ex. 200px).',
    },
  ],
  preview: {
    select: {
      title: 'width',
    },
  },
};
