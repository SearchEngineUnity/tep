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
        hero {
          h1
        }
        internal {
          contentDigest
        }
        pageTitle
        metaDescription
        toc {
          title
        }
        guideBody {
          _rawChildren(resolveReferences: {maxDepth: 1})
        }
      }
    }
  }
}`;

function pageToAlgoliaRecord({
  node: {
    id,
    hero,
    pageTitle,
    metaDescription,
    toc,
    slug,
    internal,
    //  guideBody
  },
}) {
  return {
    objectID: id,
    slug: slug.current,
    title: pageTitle,
    h1: hero.h1,
    metaDescription,
    toc,
    internal,
    // guideBody,
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
