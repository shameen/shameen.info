<script lang="ts">
  type Link = {
    label: string;
    href: string;
    external?: boolean;
  };

  const links: Link[] = [
    { label: 'GitHub', href: 'https://github.com/shameen', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/shameeen', external: true },
  ];
</script>

<article class="max-w-xl space-y-4">
  <header class="space-y-1">
    <p class="text-lg font-semibold">Shameen</p>
    <p class="text-muted">Software Engineer</p>
  </header>

  <p>I build things with code: web apps, software, and the occasional weird side project.</p>
  <p>
    Professionally I've worked across behavioural change tech, hospitality tech, e-learning, and
    applied cryptography.
  </p>

  <!-- Links -->
  <div class="flex gap-4 pt-2 text-sm">
    {#each links as link (link.href)}
      <a
        href={link.href}
        class="text-link hover:text-link-hover hover:underline"
        {...link.external ? { target: '_blank', rel: 'noreferrer' } : {}}
      >
        {link.label}
      </a>
    {/each}
  </div>
</article>
