import type { Preview } from "@storybook/react";
import {StyleDecorator} from './../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import {ThemeDecorator} from './../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {RouterDecorator} from './../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import {Theme} from './../src/app/provider/themeProvider'
import '../src/app/styles/index.scss';

export const decorators = [
  StyleDecorator
];

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        excludeDecorators: true,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  args:{
    theme: Theme.LIGHT
  },
  decorators: [StyleDecorator, ThemeDecorator,RouterDecorator],

};

export default preview;

