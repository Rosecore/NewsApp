import type { Preview } from "@storybook/react";
import {StyleDecorator} from './../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import {ThemeDecoratorLight} from './../src/shared/config/storybook/ThemeDecorator/ThemeDecoratorLight/ThemeDecoratorLight'
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
  decorators: [StyleDecorator, ThemeDecoratorLight,RouterDecorator],

};

export default preview;

