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
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'caption',
      type: 'captionPT',
      title: 'Image Credit',
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
    prepare({title, media}) {
      return {
        title: `Alt text: ${title}`,
        media,
      }
    },
  },
}
