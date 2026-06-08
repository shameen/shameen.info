<script lang="ts">
  import Badge from '$lib/components/Badge.svelte';

  const title = 'Experiments';
  const subHeader = 'Experimental things. Most of these are old side projects or prototypes.';

  type Experiment = {
    title: string;
    description?: string;
    url: string;
    tags: string[];
    functional: boolean;
  };

  const experimentList = $state<Experiment[]>([
    {
      title: 'sprite',
      description: 'Test to split spritesheets',
      url: 'https://shameen.info/sprite',
      tags: ['2012', 'website'],
      functional: false,
    },
    {
      title: 'snpt beta',
      description: 'Better online text storage with history',
      url: 'https://shameen.info/snpt/beta',
      tags: ['2011', 'website'],
      functional: false,
    },
    {
      title: 'ETH Public Key to Address',
      description: 'Converts a Secp256k1 public key (Ethereum) into address format',
      url: 'https://codepen.io/shameen/details/poKxvaJ',
      tags: ['2022', 'javascript'],
      functional: true,
    },
    {
      title: 'Base/encoding detector',
      description: 'Detects possible encodings like base64, base32, hex etc',
      url: 'https://codepen.io/shameen/details/MWXbMRr',
      tags: ['2022', 'javascript'],
      functional: true,
    },
    {
      title: 'Buffer string conversion',
      description: 'Convert between base64, ascii, utf8, hex, binary etc',
      url: 'https://codepen.io/shameen/details/LYxWpBd',
      tags: ['2021', 'javascript'],
      functional: true,
    },
  ]);

  const sortedExperiments = $derived(
    [...experimentList].toSorted((a, b) => Number(b.functional) - Number(a.functional))
  );
</script>

<section class="mx-auto max-w-5xl px-4 py-10">
  <h1 class="text-3xl font-bold">{title}</h1>
  <p class="mt-2 text-muted">{subHeader}</p>

  <div class="mt-8 grid gap-4">
    {#each sortedExperiments as exp (exp.title)}
      <article class="rounded-lg border p-4 transition hover:shadow-sm">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="text-lg font-semibold">{exp.title}</h2>

            {#if exp.description}
              <p class="mt-1 text-sm text-muted">
                {exp.description}
              </p>
            {/if}
          </div>

          <Badge
            variant={exp.functional ? 'success' : 'error'}
            label={exp.functional ? 'Working' : 'Broken'}
          />
        </div>

        <a
          href={exp.url}
          target="_blank"
          rel="noreferrer"
          class="mt-3 block text-sm hover:underline"
        >
          {exp.url}
        </a>

        <div class="mt-3 flex flex-wrap gap-2">
          {#each exp.tags as tag (tag)}
            <Badge label={tag} />
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>
