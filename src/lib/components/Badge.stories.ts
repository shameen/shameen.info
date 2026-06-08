import type { Meta, StoryObj } from '@storybook/svelte';
import Badge from './Badge.svelte';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
};
export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success',
  },
};
export const Error: Story = {
  args: {
    variant: 'error',
    label: 'Error',
  },
};
export const Info: Story = {
  args: {
    variant: 'info',
    label: 'Info',
  },
};
