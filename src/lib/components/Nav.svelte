<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';

  const links = [
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/experiments', label: 'Experiments' },
  ];

  const isActive = (href: string) => page.url.pathname === href;
</script>

<nav class="relative overflow-hidden border-b text-white">
  <!-- animated background layer -->
  <div
    class="animate-hueShift absolute inset-0 bg-linear-to-r from-teal-600 via-violet-800 to-violet-600"
  ></div>

  <!-- content layer -->
  <div class="relative">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
      <!-- Left: brand -->
      <a href={resolve('/')} class="text-xl font-semibold text-white"> shameen.info </a>

      <!-- Right: links -->
      <div class="flex gap-6 text-sm">
        {#each links as link (link.href)}
          <a
            href={resolve(link.href)}
            class="text-white hover:underline"
            class:font-semibold={isActive(link.href)}
            class:opacity-70={!isActive(link.href)}
          >
            {link.label}
          </a>
        {/each}
      </div>
    </div>
  </div>
</nav>
