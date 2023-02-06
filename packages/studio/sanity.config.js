import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { colorInput } from '@sanity/color-input';
import { schemaTypes } from './schemas';
import deskStructure from './deskStructure';

export default defineConfig({
  name: 'default',
  title: 'siteBuilderV2',

  projectId: 'ki8bqxrw',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        const noContactInfo = prev.filter(
          (templateItem) => templateItem.templateId !== 'contactInfo',
        );
        const noCustomSpacing = noContactInfo.filter(
          (templateItem) => templateItem.templateId !== 'customSpacing',
        );
        const noGeneralSettings = noCustomSpacing.filter(
          (templateItem) => templateItem.templateId !== 'generalSettings',
        );
        const noLayoutSpg = noGeneralSettings.filter(
          (templateItem) => templateItem.templateId !== 'layoutSpg',
        );
        const noPalette = noLayoutSpg.filter(
          (templateItem) => templateItem.templateId !== 'palette',
        );
        return noPalette.filter((templateItem) => templateItem.templateId !== 'typography');
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
      return prev;
    },
  },
});
