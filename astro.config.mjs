import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://threadsnappers.github.io',
  base: '/advent-of-code-python/',
  integrations: [
    markdoc(),
    starlight({
      title: 'Threadsnappers',
      editLink: {
        baseUrl: 'https://github.com/Threadsnappers/advent-of-code-python/edit/main/',
      },
      social: {
        github: 'https://github.com/Threadsnappers/advent-of-code-python',
        discord: 'https://discord.gg/NuKDmRUPRm'
      },
      sidebar: [
        {
          label: 'AoC 2022',
          autogenerate: { directory: 'aoc2022'}
        },
      ],
    }),
  ],
});
