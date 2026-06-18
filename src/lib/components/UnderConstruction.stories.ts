import type { Meta, StoryObj } from '@storybook/sveltekit';
import UnderConstruction from './UnderConstruction.svelte';

export default {
  title: 'Components/UnderConstruction',
  component: UnderConstruction,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UnderConstruction>;

type Story = StoryObj<typeof UnderConstruction>;

export const Default: Story = {};
