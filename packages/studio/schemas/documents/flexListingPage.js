import { MdWeb } from 'react-icons/md';
import * as sections from '../sections';

export default {
  name: 'flexListingPage',
  type: 'document',
  title: 'Flex Listing Page',
  icon: MdWeb,
  fieldsets: [
    {
      name: 'general',
      title: 'SEO and General Fields',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'social',
      title: 'Social Sharing',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'sections',
      title: 'Sections',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'indexing',
      title: 'Indexing',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'seuID',
      title: 'ID',
      type: 'string',
      fieldset: 'general',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        // add a custom rule for isUnique
      ],
    },
    {
      name: 'pageTitle',
      type: 'string',
      title: 'Page Title',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      fieldset: 'general',
    },
    {
      name: 'fbShareMetaPack',
      title: 'Facebook Open Graph Meta Pack',
      type: 'fbShareMetaPack',
      fieldset: 'social',
    },
    {
      name: 'twitterShareMetaPack',
      title: 'Twitter Open Graph Meta Pack',
      type: 'twitterShareMetaPack',
      fieldset: 'social',
    },
    {
      name: 'sections',
      type: 'array',
      fieldset: 'sections',
      title: 'Sections',
      of: [
        ...Object.values(sections).map(({ name, title }) => ({
          type: name,
          title,
        })),
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Please add the full path after domain.com/ as slug.',
      fieldset: 'indexing',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
      fieldset: 'indexing',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'nofollow',
      title: 'Nofollow',
      type: 'boolean',
      fieldset: 'indexing',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'canonical',
      title: 'Canonical Link Setting',
      type: 'url',
      fieldset: 'indexing',
      description: 'Fill in to replace default self canonical URL.',
    },
  ],
  preview: {
    select: {
      title: 'seuID',
      slug: 'slug.current',
      fbImg: 'facebookShareMetaPack.image',
      twitterImg: 'twitterShareMetaPack.image',
    },
    prepare({ title, slug, fbImg, twitterImg }) {
      const currentSlug = slug === '/' ? '/' : `/${slug}`;
      return {
        title,
        subtitle: currentSlug,
        media: fbImg || twitterImg,
      };
    },
  },
};
