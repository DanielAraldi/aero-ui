import { FontLoader } from '../src/components';

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    Story => (
      <FontLoader>
        <Story />
      </FontLoader>
    ),
  ],
};

export default preview;
