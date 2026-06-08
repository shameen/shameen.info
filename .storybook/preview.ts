import type { Preview } from '@storybook/sveltekit';
import type { Decorator } from '@storybook/sveltekit';
import '../src/routes/layout.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
};

export const decorators: Decorator[] = [
  (Story, ctx) => {
    const scheme = ctx.globals.scheme;

    const isDark =
      scheme === 'dark' ||
      (scheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.classList.toggle('dark', isDark);

    return Story();
  },
];

export default preview;
