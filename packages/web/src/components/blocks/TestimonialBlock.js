import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import TestimonialGrid from './TestimonialGrid';
import TestimonialSilder from './TestimonialSlider';
import StructuredSectionHeader from '../sections/StructuredSectionHeader';
import StructuredSectionFooter from '../sections/StructuredSectionFooter';

function TestimonialBlock(props) {
  const {
    hasSectionHeading,
    hasSectionSubheading,
    hasSectionSubtitle,
    hasSectionFooter,
    heading,
    subheading,
    subtitle,
    footer,
    headerAlignment,
    footerAlignment,
    headingColor,
    subheadingColor,
    subtitleColor,
    footerColor,
    tileOption,
  } = props;

  const typeSelector = {
    1: TestimonialGrid,
    2: TestimonialGrid,
    3: TestimonialSilder,
  };

  const TestimonialDisplay = typeSelector[tileOption];

  return (
    <Grid container spacing={5} sx={{ padding: '0px' }}>
      {(heading || subheading || subtitle) && (
        <Grid xs={12}>
          <StructuredSectionHeader
            heading={heading}
            subheading={subheading}
            subtitle={subtitle}
            align={headerAlignment}
            hasSectionHeading={hasSectionHeading}
            hasSectionSubheading={hasSectionSubheading}
            hasSectionSubtitle={hasSectionSubtitle}
            headingColor={headingColor}
            subheadingColor={subheadingColor}
            subtitleColor={subtitleColor}
          />
        </Grid>
      )}
      <TestimonialDisplay {...props} />
      {footer && (
        <Grid xs={12}>
          <StructuredSectionFooter
            footer={footer}
            footerColor={footerColor}
            align={footerAlignment}
            hasSectionFooter={hasSectionFooter}
          />
        </Grid>
      )}
    </Grid>
  );
}

export default TestimonialBlock;
