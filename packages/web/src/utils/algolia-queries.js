// const escapeStringRegexp = require('escape-string-regexp');
// const pagePath = `content`;
const indexName = `SiteBuilderV2`;

const pageQuery = `{
  pages: allSanitySoloGuidePage {
    edges {
      node {
        slug {
          current
        }
        id
        hero{
          h1
        }
        internal {
          contentDigest
        }
      }
    }
  }
}`;

function pageToAlgoliaRecord({
  node: {
    id,
    hero: { h1 },
    slug,
    ...rest
  },
}) {
  return {
    objectID: id,
    slug: slug.current,
    title: h1,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    // settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
