import { AiOutlineLine } from 'react-icons/ai';

export default {
  title: 'Product Card Divider Segment',
  name: 'productCardDividerSegment',
  type: 'object',
  icon: AiOutlineLine,
  fields: [
    {
      name: 'divider',
      title: 'Divider',
      type: 'string',
      initialValue: 'Divider',
      hidden: true,
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Product Card Divider Segment',
      };
    },
  },
};
