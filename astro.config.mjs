import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://mi-sitio.hyperlift.dev',
  integrations: [starlight()],
});
