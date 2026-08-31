/** @type {import('next').NextConfig} */
const repoName = 'mjs';
const isGithubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `https://MJ-Ahmad.github.io/${repoName}/` : '',
};

export default nextConfig;
