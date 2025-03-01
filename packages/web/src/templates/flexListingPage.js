import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import LrHero from '../components/sections/LrFlexHero';
import LrFlex from '../components/sections/StructuredLrFlex';
import StackFlex from '../components/sections/StackFlex';
import StackHero from '../components/sections/StackHero';
import PaginatedListingSection from '../components/sections/PaginatedListingSection';
import { useSpGuides } from '../hooks/useSpGuides';
import {
  mapLrHeroToProps,
  mapLrFlexToProps,
  mapStackSectionToProps,
  mapPaginatedListingSectionToProps,
} from '../lib/mapToProps';

const type = 'page';

export const query = graphql`
  query ListPageTemplate($slug: String) {
    page: sanityFlexListingPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      sections {
        ... on SanityLrHero {
          _key
          _type
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    href
                  }
                }
                text
                title
                subtitle
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  href
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              idTag
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  href
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  border
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              idTag
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawFooter(resolveReferences: { maxDepth: 4 })
              _rawText(resolveReferences: { maxDepth: 5 })
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideo {
              _key
              _type
              idTag
              url
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          idTag
          layout
          reverseOrder
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          _rawFooter(resolveReferences: { maxDepth: 4 })
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
          blockAlignment
          footerAlignment
          headerAlignment
        }
        ... on SanityLrFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 4 })
          blockAlignment
          headerAlignment
          footerAlignment
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    href
                  }
                }
                text
                title
                subtitle
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityImageBlock {
              idTag
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 12 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideo {
              _key
              _type
              idTag
              url
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  href
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  href
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  border
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
          idTag
          layout
          reverseOrder
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
        }
        ... on SanityStackHero {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 4 })
          blockWidth
          footerAlignment
          headerAlignment
          idTag
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    href
                  }
                }
                text
                title
                subtitle
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  href
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  href
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  border
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              idTag
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 5 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideo {
              _key
              _type
              idTag
              url
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
        }
        ... on SanityStackFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 4 })
          blockWidth
          footerAlignment
          headerAlignment
          idTag
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 4 })
              _rawFooter(resolveReferences: { maxDepth: 4 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    href
                  }
                }
                text
                title
                subtitle
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 1 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 1 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  href
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  href
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  border
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              idTag
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 1 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 4 })
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 12 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 4 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 4 })
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideo {
              _key
              _type
              idTag
              url
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 1 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 5 })
            }
          }
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
          }
        }
        ... on SanityPaginatedListingSection {
          _key
          _type
          listItemType
          _rawFooter(resolveReferences: { maxDepth: 4 })
          count
          footerAlignment
          header {
            _rawSubtitle(resolveReferences: { maxDepth: 4 })
            heading
            subheading
          }
          headerAlignment
          idTag
          designSettings {
            outerPadding: _rawOuterPadding
            innerPadding: _rawInnerPadding
            borderRadius
            caption {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
        }
      }
      canonical
      slug {
        current
      }
      pageTitle
      metaDescription
      twitterShareMetaPack {
        twitterShareImage {
          asset {
            url
          }
        }
        twitterShareDescription
        twitterShareTitle
      }
      nofollow
      noindex
      fbShareMetaPack {
        fbShareTitle
        fbShareDescription
        fbShareImage {
          asset {
            url
          }
        }
      }
    }
  }
`;

function FlexListingPage({ data, location, pageContext }) {
  let allListItems;
  const spGuides = useSpGuides();

  switch (pageContext.listItemType) {
    case 'Solo Guide Page':
      allListItems = spGuides;
      break;

    default:
      break;
  }

  const { currentpage, limit } = pageContext;

  const listingItems = allListItems.slice((currentpage - 1) * limit, currentpage * limit);

  return (
    <Layout location={location} data={data.page} type={type}>
      <main>
        {data.page.sections.map((section) => {
          const { _type } = section;
          switch (_type) {
            case 'lrHero':
              return <LrHero key={section._key} {...mapLrHeroToProps(section)} />;

            case 'lrFlex':
              return <LrFlex key={section._key} {...mapLrFlexToProps(section)} />;

            case 'stackFlex':
              return <StackFlex key={section._key} {...mapStackSectionToProps(section)} />;

            case 'stackHero':
              return <StackHero key={section._key} {...mapStackSectionToProps(section)} />;

            case 'paginatedListingSection':
              return (
                <PaginatedListingSection
                  key={section._key}
                  {...mapPaginatedListingSectionToProps(section)}
                  {...pageContext}
                  listingItems={listingItems}
                />
              );

            default:
              return <div>Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
}

export default FlexListingPage;
