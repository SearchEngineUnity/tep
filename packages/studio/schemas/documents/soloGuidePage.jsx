import { RiPagesLine } from 'react-icons/ri';

export default {
  name: 'soloGuidePage',
  type: 'document',
  title: 'Solo Guide Page',
  icon: RiPagesLine,
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
      name: 'tile',
      title: 'Listing Tile Fields',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'hero',
      title: 'Hero',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'mainContent',
      title: 'Main Content',
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
      name: 'displayDate',
      title: 'Display Date',
      type: 'date',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
      name: 'tileTitle',
      title: 'Tile Title',
      type: 'string',
      fieldset: 'tile',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'tileImage',
      title: 'Tile Image',
      type: 'tileImage',
      fieldset: 'tile',
      validation: (Rule) => Rule.custom((value) => (value?.asset ? true : 'An image is required')),
    },
    {
      name: 'tileText',
      title: 'Tile Text',
      type: 'text',
      fieldset: 'tile',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'heroType',
      title: 'Hero Type',
      type: 'string',
      options: {
        list: [
          { title: 'LR Hero', value: 'lrHero' },
          { title: 'Stack Hero', value: 'stackHero' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'lrHero',
      fieldset: 'hero',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'heroAsset',
      title: 'Hero Asset',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Product Grid', value: 'productGrid' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'image',
      fieldset: 'hero',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'h1',
      title: 'H1 Text',
      type: 'string',
      fieldset: 'hero',
      validation: (Rule) => [Rule.required().error('H1 Text is required')],
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle Text',
      type: 'minPT',
      fieldset: 'hero',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageBlock',
      fieldset: 'hero',
      hidden: ({ document }) => document.heroAsset !== 'image',
    },
    {
      name: 'heroVideo',
      title: 'Hero Video',
      type: 'video',
      fieldset: 'hero',
      hidden: ({ document }) => document.heroAsset !== 'video',
    },
    {
      name: 'heroProductGrid',
      title: 'Hero Product Grid',
      type: 'productGrid',
      fieldset: 'hero',
      hidden: ({ document }) => document.heroAsset !== 'productGrid',
    },
    {
      name: 'toc',
      title: 'Table of Contents',
      type: 'array',
      of: [{ type: 'tocLink' }],
      description: 'The order should match the in content appearance.',
      fieldset: 'mainContent',
    },
    {
      name: 'guideBody',
      type: 'maxPT',
      title: 'Guide Content Body',
      fieldset: 'mainContent',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'includeDisclaimer',
      title: 'Include Disclaimer',
      type: 'boolean',
      initialValue: true,
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
      media: 'tileImage',
      fbImg: 'facebookShareMetaPack.image',
      twitterImg: 'twitterShareMetaPack.image',
    },
    prepare({ title, slug, media, fbImg, twitterImg }) {
      return {
        title,
        subtitle: `/${slug}`,
        media: media || fbImg || twitterImg,
      };
    },
  },
};
