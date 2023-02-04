import { BsCardImage } from 'react-icons/bs';

export default {
  name: 'imageBlock',
  title: 'Image Block',
  type: 'image',
  icon: BsCardImage,
  options: {
    hotspot: true, // <-- Defaults to false
    storeOriginalFilename: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },

    {
      name: 'caption',
      type: 'captionPT',
      title: 'Caption',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'maxHeight',
      type: 'number',
      title: 'Image Max Height',
      description: `You can enter a height in pixels. If the image's native height is smaller it will be used instead.`,
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'maxWidth',
      type: 'number',
      title: 'Image Max Width',
      description: `You can enter a width in pixels. If the image's native width is smaller it will be used instead.`,
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
        subtitle: 'Image Block',
      };
    },
  },
};
