import { BsInfoSquare } from 'react-icons/bs';

export default {
  title: 'Info Item',
  name: 'infoItem',
  type: 'object',
  icon: BsInfoSquare,
  fields: [
    {
      name: 'label',
      title: 'Info Item Label',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Info Item Text',
      type: 'noHeadingsPT',
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'text',
    },
  },
};
