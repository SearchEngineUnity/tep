export default {
  name: 'typography',
  type: 'document',
  title: 'Typography',
  __experimental_actions: ['create', 'update', 'publish'],
  fieldsets: [
    {
      name: 'general',
      title: 'General',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'variants',
      title: 'Variants',
      description: 'Please include units for font sizes (px, em, or rem).',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'htmlFontSize',
      title: 'HTML Font Size (Root)',
      type: 'number',
      fieldset: 'general',
      initialValue: 16,
    },
    {
      name: 'fontFamily',
      title: 'Font Family',
      type: 'string',
      fieldset: 'general',
      initialValue: 'Roboto, Helvetica, Arial, sans-serif',
    },
    {
      name: 'fontSize',
      title: 'Font Size',
      type: 'number',
      fieldset: 'general',
      initialValue: 14,
    },
    {
      name: 'fontWeightLight',
      title: 'Font Weight Light',
      type: 'number',
      fieldset: 'general',
      initialValue: 300,
    },
    {
      name: 'fontWeightRegular',
      title: 'Font Weight Regular',
      type: 'number',
      fieldset: 'general',
      initialValue: 400,
    },
    {
      name: 'fontWeightMedium',
      title: 'Font Weight Medium',
      type: 'number',
      fieldset: 'general',
      initialValue: 500,
    },
    {
      name: 'fontWeightBold',
      title: 'Font Weight Bold',
      type: 'number',
      fieldset: 'general',
      initialValue: 700,
    },
    {
      name: 'h1',
      title: 'H1',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: 1.167,
      },
    },
    {
      name: 'h2',
      title: 'H2',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 300,
        fontSize: '3.75rem',
        lineHeight: 1.2,
      },
    },
    {
      name: 'h3',
      title: 'H3',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: 1.167,
      },
    },
    {
      name: 'h4',
      title: 'H4',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '2.125rem',
        lineHeight: 1.235,
      },
    },
    {
      name: 'h5',
      title: 'H5',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.334,
      },
    },
    {
      name: 'h6',
      title: 'H6',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.6,
      },
    },
    {
      name: 'subtitle1',
      title: 'Subtitle 1',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.75,
      },
    },
    {
      name: 'subtitle2',
      title: 'Subtitle 2',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.57,
      },
    },
    {
      name: 'body1',
      title: 'Body 1',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
      },
    },
    {
      name: 'body2',
      title: 'Body 2',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.43,
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66,
      },
    },
    {
      name: 'overline',
      title: 'Overline',
      type: 'muiTypeStyleSet',
      fieldset: 'variants',
      initialValue: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 2.66,
      },
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Typography`,
      }
    },
  },
}
