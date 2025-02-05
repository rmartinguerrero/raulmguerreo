import { defineConfig } from 'astro/config';
import content from '@astro/content';

export default defineConfig({
  integrations: [content()],
});
