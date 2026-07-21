import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  ...nextVitals,
  {
    ignores: ['.next/**', '.npm-cache/**', 'node_modules/**', 'out/**', 'next-env.d.ts'],
  },
  {
    files: ['src/components/ErrorBoundary.tsx'],
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  {
    files: [
      'src/app/**/blog/**/page.tsx',
      'src/app/**/pack-completo/page.tsx',
      'src/components/CookieBanner.tsx',
    ],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    files: ['src/app/**/blog/**/page.tsx'],
    rules: {
      'react-hooks/immutability': 'off',
    },
  },
  {
    files: ['src/components/BuyButton.tsx', 'src/components/CookieBanner.tsx'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
];

export default eslintConfig;
