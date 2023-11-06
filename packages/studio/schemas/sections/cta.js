import { FaRunning } from 'react-icons/fa';

export default {
  title: 'CTA',
  name: 'cta',
  type: 'object',
  icon: FaRunning,
  description: 'A pre-designed CTA will appear on page. Dismiss to continue.',
  fields: [
    {
      name: 'cta',
      title: 'CTA',
      type: 'string',
      initialValue: 'A pre-designed CTA will appear on page. Dismiss to continue.',
      readOnly: true,
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Pre-designed CTA',
      };
    },
  },
};
