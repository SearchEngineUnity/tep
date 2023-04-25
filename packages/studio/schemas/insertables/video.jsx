import React from 'react';
import { MdVideocam } from 'react-icons/md';
import VideoPreview from '../components/previews/VideoPreview';

export default {
  type: 'object',
  name: 'video',
  title: 'Video',
  icon: MdVideocam,
  fields: [
    {
      type: 'url',
      name: 'url',
      title: 'URL',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: VideoPreview,
  },
};
