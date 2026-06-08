<script lang="ts">
  type PortfolioItem = {
    title: string;
    description: string;
    img: string | null;
    link: {
      url: string | null;
      active: boolean;
    };
    tags: string[];
  };

  const title = 'Portfolio';

  const portfolioItems: PortfolioItem[] = [
    {
      title: 'Rapid-res',
      description: '(front-end only) restaurant bookings and pre-orders',
      img: 'images/work/rapid-res.png',
      link: { url: 'https://rapid-res.com/', active: true },
      tags: ['2024', 'React', 'Tailwind', 'TypeScript'],
    },
    {
      title: 'MASH Game',
      description: 'reproducing the paper and pencil game',
      img: 'images/work/mash-game.png',
      link: { url: 'https://shameen.github.io/mash-game-react/', active: true },
      tags: ['2023', 'React', 'TypeScript'],
    },
    {
      title: 'Hashtag Dungeon Website',
      description: 'indie game landing-page website',
      img: 'images/work/hDungeon.png',
      link: { url: 'http://hashtagdungeon.com', active: false },
      tags: ['2014', 'jQuery', 'CSS'],
    },
    {
      title: 'Negative',
      description: 'image processing tool for photo negatives (University final-year project)',
      img: 'images/work/negative.png',
      link: { url: 'https://github.com/shameen/negative', active: true },
      tags: ['2014', 'MATLAB', 'GUI', 'Image Processing'],
    },
    {
      title: 'Timetabling System',
      description: 'database-driven ASP.NET timetabling system (University team project)',
      img: 'images/work/deliv3_4.png',
      link: { url: null, active: false },
      tags: ['2013', 'ASP.NET', 'SQL Server', 'Bootstrap'],
    },
    {
      title: 'Phil Wolstenholme Photography',
      description: 'multi-page website with self-made jQuery photo gallery',
      img: 'images/work/wolstenholme1.png',
      link: { url: 'http://philwolstenholme.com/', active: false },
      tags: ['2012', 'jQuery', 'CSS'],
    },
    {
      title: 'Forbidden Memories Database',
      description: 'card game database browser and preview',
      img: 'images/work/fmr.png',
      link: { url: 'http://shameen.info/fmr', active: false },
      tags: ['2010', 'PHP', 'MySQL', 'jQuery', 'jQuery UI'],
    },
    {
      title: 'Propah Job Studios Website',
      description: 'WordPress theme (and previously simple HTML websites)',
      img: 'images/work/pjs.png',
      link: { url: 'http://propahjobstudios.co.uk/', active: false },
      tags: ['2010', 'WordPress', 'PHP', 'CSS'],
    },
    {
      title: 'snpt, online textbox',
      description: 'text storage and history',
      img: 'images/work/snpt1.png',
      link: { url: 'http://shameen.info/snpt', active: false },
      tags: ['2010', 'PHP', 'MySQL'],
    },
    {
      title: 'JR Ambulance Medical Resources',
      description: 'quote calculator',
      img: 'images/work/jrambulance.png',
      link: {
        url: 'http://www.jr-ambulance.co.uk/calculator/medical_resources_calculator_AIO.html',
        active: false,
      },
      tags: ['2011', 'JavaScript'],
    },
    {
      title: 'FI Windows & Conservatories',
      description: 'basic website with gallery and effects',
      img: 'images/work/fiwindows.png',
      link: { url: 'http://fiwindows.com/', active: false },
      tags: ['2009', 'jQuery'],
    },
    {
      title: 'iAlaina 30-second intro',
      description: "3D main titles based on 'iCarly'",
      img: null,
      link: { url: 'http://vimeo.com/10457730', active: true },
      tags: ['2011', 'Video', 'VFX', '3D', 'After Effects'],
    },
  ];
</script>

<section class="mx-auto max-w-5xl px-4 py-10">
  <h1 class="text-3xl font-bold">{title}</h1>

  <div class="mt-10 space-y-10">
    {#each portfolioItems as item (item.title)}
      <div class="flex flex-col gap-6 rounded-lg border p-4 md:flex-row">
        <!-- image -->
        <div class="w-full md:w-[640px]">
          {#if item.img}
            <img src={item.img} alt={item.title} class="max-h-[480px] w-full object-contain" />
          {:else}
            <div class="flex h-[300px] w-full items-center justify-center bg-muted/20 text-muted">
              No image
            </div>
          {/if}
        </div>

        <!-- content -->
        <div class="flex-1 md:w-[300px]">
          <h2 class="text-xl font-semibold">{item.title}</h2>

          <p class="mt-2 text-sm text-muted">
            {item.description}
          </p>

          <!-- link -->
          {#if item.link.url}
            <a
              href={item.link.url}
              target="_blank"
              rel="noreferrer"
              class="text-link hover:text-link-hover mt-3 block text-sm hover:underline"
              class:line-through={!item.link.active}
            >
              {item.link.url}
            </a>
          {/if}

          <!-- tags -->
          <div class="mt-3 flex flex-wrap gap-2">
            {#each item.tags as tag (tag)}
              <span class="rounded bg-foreground/10 px-2 py-1 text-xs text-foreground/70">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
