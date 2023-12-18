import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { media, mediaAssetSource } from 'sanity-plugin-media';
import { dashboardTool, projectUsersWidget, projectInfoWidget } from '@sanity/dashboard';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import { colorInput } from '@sanity/color-input';
import { sanityLimitWidget } from './schemas/components/widgets/sanityLimitWidget';
import { schemaTypes } from './schemas';
import deskStructure from './deskStructure';
import { GatsbyPreviewAction } from './actions';

export default defineConfig({
  name: 'default',
  title: 'tep',
  projectId: 'ed2r2yff',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    media(),
    dashboardTool({
      widgets: [
        projectInfoWidget(),
        netlifyWidget({
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'TEP',
              apiId: 'e978dfee-c169-45df-9cea-aa427232a7f8',
              buildHookId: '65805e087a739857001d30d0',
              name: 'tep',
            },
          ],
          layout: { width: 'small', height: 'small' },
        }),
        sanityLimitWidget({ projectId: 'ed2r2yff' }),
        projectUsersWidget(),
      ],
    }),
    visionTool(),
    colorInput(),
  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource);
      },
    },
  },
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => {
          if (
            templateItem.templateId === 'contactInfo' ||
            templateItem.templateId === 'customSpacing' ||
            templateItem.templateId === 'generalSettings' ||
            templateItem.templateId === 'layoutSpg' ||
            templateItem.templateId === 'palette' ||
            templateItem.templateId === 'typography'
          ) {
            return false;
          }
          return true;
        });
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (
        schemaType === 'contactInfo' ||
        schemaType === 'customSpacing' ||
        schemaType === 'generalSettings' ||
        schemaType === 'layoutSpg' ||
        schemaType === 'palette' ||
        schemaType === 'typography'
      ) {
        return prev.filter(({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action));
      }
      if (
        schemaType === 'page' ||
        schemaType === 'soloGuidePage' ||
        schemaType === 'flexListingPage'
      ) {
        return [GatsbyPreviewAction, ...prev];
      }
      return prev;
    },
  },
});
