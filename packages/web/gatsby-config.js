/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || `development`}`,
});

const isProd = process.env.NODE_ENV === 'production';
const previewEnabled = (process.env.GATSBY_IS_PREVIEW || 'false').toLowerCase() === 'true';

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://sitebuilderv1.netlify.app', // update to new netlify URL
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `web`,
    siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ki8bqxrw',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: !isProd, // watchMode only in dev mode
        overlayDrafts: !isProd || previewEnabled, // drafts in dev & Gatsby Cloud Preview
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'production',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
