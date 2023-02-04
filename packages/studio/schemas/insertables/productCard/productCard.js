import { BiNews } from 'react-icons/bi';

export default {
  name: 'productCard',
  title: 'Product Card',
  type: 'object',
  icon: BiNews,
  fieldsets: [
    {
      name: 'essentials',
      title: 'Essentials',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      title: 'Product Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
      fieldset: 'essentials',
    },
    {
      title: 'Product Heading Level',
      name: 'headingLevel',
      type: 'string',
      options: {
        list: [
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'H4', value: 'h4' },
          { title: 'Non-Heading', value: 'p' },
        ],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
      fieldset: 'essentials',
    },
    {
      title: 'Rating Score',
      name: 'rating',
      type: 'number',
      fieldset: 'essentials',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'productCardImage',
      fieldset: 'essentials',
    },
    {
      title: 'Special Tag Text',
      name: 'tagText',
      type: 'string',
      fieldset: 'essentials',
    },
    {
      title: 'Special Tag Color',
      name: 'tagColor',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      fieldset: 'essentials',
    },
    {
      title: 'Info Item List',
      name: 'infoList',
      type: 'array',
      of: [{ type: 'infoItem' }],
      fieldset: 'essentials',
    },
    {
      title: 'Top Button',
      name: 'topBtn',
      type: 'btnBlockMui',
      fieldset: 'essentials',
    },
    {
      title: 'Product Card Flex Segment Stack',
      name: 'segments',
      type: 'array',
      of: [{ type: 'productCardFlexSegment' }, { type: 'productCardDividerSegment' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image.asset',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Product Card',
        media,
      };
    },
  },
};
