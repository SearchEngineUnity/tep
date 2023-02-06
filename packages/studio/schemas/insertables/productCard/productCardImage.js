export default {
  name: 'productCardImage',
  title: 'Product Card Image',
  type: 'image',
  options: {
    storeOriginalFilename: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
    },
    {
      name: 'caption',
      type: 'captionPT',
      title: 'Image Credit',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
        media,
      };
    },
  },
};
