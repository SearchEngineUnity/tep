import { RiVideoLine } from 'react-icons/ri';

export default {
  name: 'videoHero',
  title: 'Video - Hero',
  type: 'object',
  icon: RiVideoLine,
  fieldsets: [
    {
      name: 'presentation',
      title: 'Presentation Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
      description:
        'Add ID to the selected string. Please only use alphanumeric characters and hypen and do not start the string with a number.',
    },
    {
      name: 'heading',
      title: 'H1 Heading',
      description: 'Heading Color from Section Design will apply to this text.',
      type: 'string',

      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'reference',
      to: [{ type: 'companyLogo' }],
    },
    {
      name: 'button',
      title: 'Button',
      type: 'btn',
    },
    {
      name: 'video',
      title: 'Background Video',
      type: 'reference',
      to: [{ type: 'videoAsset' }],
    },
    {
      name: 'designSettings',
      title: 'Design Settings',
      type: 'reference',
      to: [{ type: 'sectionDesignSet' }],
      fieldset: 'presentation',
    },
  ],
  preview: {
    select: {
      subtitle: '_type',
      id: 'idTag',
    },
    prepare({ id, subtitle }) {
      return {
        subtitle,
        title: `ID: ${id}`,
      };
    },
  },
};
