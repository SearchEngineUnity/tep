import AffiliateLinkRenderer from '../components/previews/AffiliateLinkRenderer';
import ExternalLinkRenderer from '../components/previews/ExternalLinkRenderer';
import InternalLocalRenderer from '../components/previews/InternalLocalRenderer';
import InternalGlobalRenderer from '../components/previews/InternalGlobalRenderer';

export default {
  title: 'Caption PT',
  name: 'captionPT',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [], // if left empty this will be normal text as default.
      lists: [],
      marks: {
        decorators: [],
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
        ],
      },
    },
  ],
};
