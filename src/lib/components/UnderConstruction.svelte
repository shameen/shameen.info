<script lang="ts">
  import { page } from '$app/state';
  let { showEmailCTA = false } = $props<{
    showEmailCTA?: boolean;
  }>();
  const email = 'shameen@shameen.info';
  const uriMailto = `mailto:${email}?subject=${encodeURIComponent(
    `Interest in Shameen's website project: ${page.url.pathname}`
  )}`;
</script>

<div class="flex items-center gap-8 py-16">
  <div class="w-1/4 text-center text-6xl">🚧</div>

  <div class="flex flex-1 flex-col gap-3 text-muted">
    <h1 class="text-2xl font-semibold text-foreground">Not currently available</h1>

    <p>This project is currently offline while I work on other things.</p>

    {#if showEmailCTA}
      <p>
        If you're interested in seeing it return, please let me know. Knowing that people are using
        or looking for a project helps me decide what to work on next:
        <a class="hover:underline" href={uriMailto} rel="nofollow">
          {email}
        </a>
      </p>
    {/if}
  </div>
</div>
