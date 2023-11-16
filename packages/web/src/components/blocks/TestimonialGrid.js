import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import StructuredSectionHeader from '../sections/StructuredSectionHeader';
import StructuredSectionFooter from '../sections/StructuredSectionFooter';
import Tile1 from '../testimonialTiles/TestimonialImage';
import Tile2 from '../testimonialTiles/TestimonialPlain';
import { mapTestimonialListToProps } from '../../lib/mapToProps';

function TestimonialGrid({
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
  testimonialList,
  layout,
  tileOption,
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

      {testimonialList.map((testimonial) => {
        const tileSelector = (key) => {
          switch (key) {
            case '1':
              return <Tile1 {...mapTestimonialListToProps(testimonial)} />;
            case '2':
              return <Tile2 {...mapTestimonialListToProps(testimonial)} />;
            default:
              return <div> Tile still under development</div>;
          }
        };
        return (
          <Grid key={testimonial._id} {...col}>
            {tileSelector(tileOption)}
          </Grid>
        );
      })}
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

export default TestimonialGrid;
