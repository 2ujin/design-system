module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/transform-runtime',
      [
        '@emotion',
        {
          importMap: {
            '@storybook/theming': {
              styled: { canonicalImport: ['@emotion/styled', 'default'] },
              css: { canonicalImport: ['@emotion/react', 'css'] },
              Global: { canonicalImport: ['@emotion/react', 'Global'] },
            },
          },
        },
      ],
    ],
  };
};
