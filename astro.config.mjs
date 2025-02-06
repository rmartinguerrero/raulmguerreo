import { defineConfig } from 'astro/config';
import markdown from '@astro/markdown';

// https://astro.build/config
export default defineConfig({
  integrations: [markdown()],
});
