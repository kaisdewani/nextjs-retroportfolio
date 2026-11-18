/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@react95/core', '@react95/icons'],
  turbopack: {
    rules: {
      '*.{eot,ttf,woff,woff2}': { type: 'asset' },
    },
  },
};
