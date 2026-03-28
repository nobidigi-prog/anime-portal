import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // ↓ この一行を追加してください
  output: 'server', 
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});