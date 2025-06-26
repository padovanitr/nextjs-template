export default {
  '*.{ts,tsx}': 'pnpm lint --fix',
  '**/*.{js,jsx,ts,tsx,json,md,mdx,cjs,mjs,cts,mts}': ['pnpm prettier:write'],
};
