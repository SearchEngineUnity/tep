import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import { determineColor } from '../../lib/helperFunctions';
import TileImageLeft from '../listingTile/TileSpgImageLeft';
import Pagination from '../ListingPagination';

const useStyles = makeStyles()(
  (
    theme,
    {
      linkColor,
      bleed,
      bgImage,
      backgroundColor,
      captionColor,
      repeat,
      desktopOuterPadding,
      tabletOuterPadding,
      tabletMobileOuterPadding,
      mobileOuterPadding,
      desktopInnerPadding,
      tabletInnerPadding,
      tabletMobileInnerPadding,
      mobileInnerPadding,
      borderRadius,
    },
  ) => ({
    blockOneReverse: {
      order: 1,
      [theme.breakpoints.down('sm')]: {
        order: 2,
      },
    },
    blockTwoReverse: {
      order: 2,
      [theme.breakpoints.down('sm')]: {
        order: 1,
      },
    },
    mobileGrid: {
      [theme.breakpoints.down('sm')]: {
        margin: -8,
        width: `calc(100% + 16px)`,
        '& > .MuiGrid-item': {
          padding: 8,
        },
      },
    },
    section: {
      backgroundColor: bleed && backgroundColor,
      backgroundImage: bleed && bgImage && `url(${bgImage})`,
      backgroundPosition: 'center center',
      backgroundRepeat: repeat ? 'repeat' : 'no-repeat',
      padding: desktopOuterPadding || theme.customSpacing.sectionOuter.padding.desktop,
      [theme.breakpoints.down('lg')]: {
        padding: tabletOuterPadding || theme.customSpacing.sectionOuter.padding.tablet,
      },
      [theme.breakpoints.down('md')]: {
        padding: tabletMobileOuterPadding || theme.customSpacing.sectionOuter.padding.tabletMobile,
      },
      [theme.breakpoints.down('sm')]: {
        padding: mobileOuterPadding || theme.customSpacing.sectionOuter.padding.mobile,
        backgroundImage: bleed && bgImage && repeat ? `url(${bgImage})` : 'none',
      },
      '& .pt-link': {
        color: linkColor,
      },
      '& .caption-text': {
        color: captionColor,
      },
      '& .caption-link': {
        color: captionColor,
      },
    },
    column: {
      borderRadius,
      backgroundColor: !bleed && backgroundColor,
      backgroundImage: !bleed && bgImage && `url(${bgImage})`,
      backgroundPosition: 'center center',
      backgroundRepeat: repeat ? 'repeat' : 'no-repeat',
      padding: desktopInnerPadding || theme.customSpacing.sectionInner.padding.desktop,
      [theme.breakpoints.down('lg')]: {
        padding: tabletInnerPadding || theme.customSpacing.sectionInner.padding.tablet,
      },
      [theme.breakpoints.down('md')]: {
        padding: tabletMobileInnerPadding || theme.customSpacing.sectionInner.padding.tabletMobile,
      },
      [theme.breakpoints.down('sm')]: {
        padding: mobileInnerPadding || theme.customSpacing.sectionInner.padding.mobile,
        backgroundImage: !bleed && bgImage && repeat ? `url(${bgImage})` : 'none',
      },
    },
  }),
);

function PaginatedListingSection({
  idTag,
  heading,
  subheading,
  subtitle,
  footer,
  layout,
  headerAlignment,
  footerAlignment,
  designSettings,
  currentpage,
  numPages,
  slug,
  listingItems,
}) {
  // number of tiles desktop/tablet/tablet-mobile/mobile: '6/4/2/1' -> {lg: 2, md: 3, sm: 6, xs: 12}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = {
      lg: 12 / valueArrNum[0],
      md: 12 / valueArrNum[1],
      sm: 12 / valueArrNum[2],
      xs: 12 / valueArrNum[3],
    };
    return colObj;
  };

  const col = colCalculate(layout);
  const bleed = designSettings ? !!designSettings?.bleed : true;
  const bgImage = designSettings?.bgImage?.asset?.url;
  const repeat = !!designSettings?.repeat;
  const backgroundColor = determineColor(designSettings?.background?.color) || 'transparent';
  const foregroundColor = determineColor(designSettings?.foreground?.color) || 'text.primary';
  const linkColor = determineColor(designSettings?.link?.color) || 'initial';
  const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';
  const paginationColor = designSettings?.foreground?.color;
  const desktopOuterPadding = designSettings?.outerPadding?.desktopPadding;
  const tabletOuterPadding = designSettings?.outerPadding?.tabletPadding;
  const tabletMobileOuterPadding = designSettings?.outerPadding?.tabletMobilePadding;
  const mobileOuterPadding = designSettings?.outerPadding?.mobilePadding;
  const desktopInnerPadding = designSettings?.innerPadding?.desktopPadding;
  const tabletInnerPadding = designSettings?.innerPadding?.tabletPadding;
  const tabletMobileInnerPadding = designSettings?.innerPadding?.tabletMobilePadding;
  const mobileInnerPadding = designSettings?.innerPadding?.mobilePadding;
  const borderRadius = designSettings?.borderRadius || '0px';

  const { classes } = useStyles({
    linkColor,
    bleed,
    bgImage,
    backgroundColor,
    repeat,
    desktopOuterPadding,
    tabletOuterPadding,
    tabletMobileOuterPadding,
    mobileOuterPadding,
    desktopInnerPadding,
    tabletInnerPadding,
    tabletMobileInnerPadding,
    mobileInnerPadding,
    borderRadius,
  });

  return (
    <Box id={idTag} component="section" color={foregroundColor} className={classes.section}>
      <Container maxWidth="lg" className={classes.column}>
        <StructuredSectionHeader
          heading={heading}
          subheading={subheading}
          subtitle={subtitle}
          headingColor={headingColor}
          subheadingColor={subheadingColor}
          subtitleColor={subtitleColor}
          align={headerAlignment}
        />
        <Grid container spacing={6}>
          {listingItems.map((item) => (
            <Grid item key={item._key} {...col}>
              <TileImageLeft {...item} />
            </Grid>
          ))}
        </Grid>
        {numPages > 1 && (
          <Pagination
            currentpage={currentpage}
            numPages={numPages}
            slug={slug}
            color={paginationColor}
          />
        )}
        <StructuredSectionFooter
          footer={footer}
          footerColor={footerColor}
          align={footerAlignment}
        />
      </Container>
    </Box>
  );
}

export default PaginatedListingSection;
