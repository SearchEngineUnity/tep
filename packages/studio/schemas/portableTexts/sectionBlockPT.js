// import InlineImageRenderer from '../components/previews/InlineImageRenderer';
import AffiliateLinkRenderer from '../components/previews/AffiliateLinkRenderer';
import ExternalLinkRenderer from '../components/previews/ExternalLinkRenderer';
import InternalLocalRenderer from '../components/previews/InternalLocalRenderer';
import InternalGlobalRenderer from '../components/previews/InternalGlobalRenderer';
import JumpLinkRenderer from '../components/previews/JumpLinkRenderer';

export default {
  title: 'Section Block PT',
  name: 'sectionBlockPT',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [
          {
            name: 'internalLocal',
            type: 'internalLocal',
            title: 'Internal Local Link',
            components: {
              annotation: InternalLocalRenderer,
            },
          },
          {
            name: 'internalGlobal',
            type: 'internalGlobal',
            title: 'Internal Global Link',
            components: {
              annotation: InternalGlobalRenderer,
            },
          },
          {
            title: 'External Link',
            name: 'externalLink',
            type: 'externalLink',
            components: {
              annotation: ExternalLinkRenderer,
            },
          },
          {
            title: 'Affiliate Link',
            name: 'affiliateLink',
            type: 'affiliateLink',
            components: {
              annotation: AffiliateLinkRenderer,
            },
          },
          {
            name: 'jumpLink',
            type: 'jumpLink',
            title: 'Page Jump Link',
            components: {
              annotation: JumpLinkRenderer,
            },
          },
          // {
          //   title: 'Inline Image',
          //   name: 'inlineImage',
          //   type: 'image',
          //   options: {
          //     hotspot: true, // <-- Defaults to false
          //     storeOriginalFilename: true,
          //   },
          //   fields: [
          //     {
          //       name: 'height',
          //       type: 'string',
          //       title: 'Image height',
          //       description: `You can enter a height % of vh. If the image's native height is smaller it will be used instead.`,
          //     },
          //   ],

          //     icon: MdImage,
          //     component: InlineImageRenderer,

          //   validation: (Rule) => [Rule.required().error('Missing Image')],
          // },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    { type: 'illustration' },
    { type: 'clickableImage' },
    { type: 'btnBlockMui' },
    { type: 'highlightBox' },
    { type: 'videoEmbed' },
    { type: 'smartTable' },
    { type: 'smartGrid' },
    { type: 'smartOrderedList' },
    { type: 'smartUnorderedList' },
    { type: 'productCard' },
  ],
};
