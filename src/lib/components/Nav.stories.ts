import type { Meta, StoryObj } from '@storybook/sveltekit';
import Nav from './Nav.svelte';

export default {
  title: 'Components/Nav',
  component: Nav,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Nav>;

type Story = StoryObj<typeof Nav>;

export const Default: Story = {};
