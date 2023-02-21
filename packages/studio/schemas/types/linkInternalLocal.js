import { FaLink } from 'react-icons/fa';

export default {
  title: 'Internal Local Link',
  name: 'internalLocal',
  type: 'object',
  icon: FaLink,
  fields: [
    {
      name: 'href',
      type: 'string',
      title: 'Path',
      description: 'Please start with "/".',
      // also need validation for rules must start with "/"
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      title: 'Open in new tab?',
      name: 'newTab',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      link: 'reference.slug.current',
      id: 'hashId',
      parameter: 'parameter',
    },
    prepare({ link, id, parameter }) {
      return {
        title: `/${link}${id ? `#${id}` : ''}${parameter ? `?${parameter}` : ''}`,
      };
    },
  },
};
