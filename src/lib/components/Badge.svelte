<script lang="ts">
  type Variant = 'success' | 'error' | 'info' | 'gray';
  type Props = {
    variant?: Variant;
    label: string;
  };
  const { variant = 'gray', label }: Props = $props();

  const classes: Record<Variant, string> = {
    success: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    error: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    info: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    gray: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  };
</script>

<span class={`rounded px-2 py-1 text-xs font-medium ${classes[variant]}`}>
  {label}
</span>
