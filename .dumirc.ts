import { defineConfig } from 'dumi';

const repo = 'dumi-monorepo-template';

export default defineConfig({
  resolve: {
    // atomDirs: [{ type: 'component', dir: 'components' }], // 预留后续新增组件库时需要
    codeBlockMode: 'passive',
  },
  metas: [
    { name: 'build-time', content: Date.now().toString() },
  ],
  https: {},
  themeConfig: {
    name: 'EvanFang',
    socialLinks: {
      github: 'https://github.com/evanfang0054/dumi-monorepo-template',
    },
    logo: '/logo.png',
    // rtl: true,
    prefersColor: { default: 'auto' },
    footer: `Copyright © ${new Date().getFullYear()} EvanFang`
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
