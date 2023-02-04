import { MdVideocam } from 'react-icons/md';
import Player from '../components/previews/VideoEmbedPreview';

export default {
  type: 'object',
  name: 'videoEmbed',
  title: 'Video Embed',
  icon: MdVideocam,
  fields: [
    {
      type: 'url',
      name: 'url',
      title: 'URL',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'ratio',
      type: 'string',
      title: 'Aspect Ratio',
      description: `Please select based on your video's aspect ratio. Vimeo video could be in either size.`,
      options: {
        list: [
          { title: 'Youtube (16: 9)', value: '56.25%' },
          { title: 'Vimeo (21: 9)', value: '42.86%' },
        ],
      },
      initialValue: '56.25%',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: { url: 'url' },
    component: Player,
  },
};
