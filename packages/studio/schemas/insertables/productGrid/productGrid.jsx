import { BsLayoutThreeColumns } from 'react-icons/bs';

export default {
  name: 'productGrid',
  title: 'Product Grid',
  type: 'object',
  icon: BsLayoutThreeColumns,
  fields: [
    {
      title: 'ID',
      name: 'id',
      type: 'string',
    },
    {
      title: 'Button Text',
      name: 'btnText',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      title: 'Page Jump Text',
      name: 'pageJumpText',
      type: 'string',
    },
    {
      title: 'Tile Set',
      name: 'tileSet',
      type: 'array',
      of: [{ type: 'productGridTile' }],
      validation: (Rule) =>
        Rule.custom((tiles) => {
          return tiles && tiles?.length >= 1 && tiles?.length <= 5
            ? true
            : 'Number of tiles must be between 1 and 5.';
        }),
    },
    {
      title: 'Product Grid Design Option',
      name: 'design',
      type: 'string',
      options: {
        list: [{ title: 'Default', value: 'default' }],
      },
      validation: (Rule) => [Rule.required().error('Field is required')],
      initialValue: 'default',
    },
  ],
  preview: {
    select: {
      id: 'id',
    },
    prepare({ id }) {
      return {
        title: id || 'Product Grid',
      };
    },
  },
};
