<script lang="ts">
  import './layout.css';
  import { page } from '$app/state';
  import Nav from '$lib/components/Nav.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <title>Shameen</title>
</svelte:head>

<Nav />

<main class="mx-auto max-w-5xl px-4 py-8">
  {#key page.url.pathname}
    <div class="animate-fadeIn">
      {@render children()}
    </div>
  {/key}
</main>
