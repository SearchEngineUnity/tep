import React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import CompanyTile from '../testimonialTiles/TestimonialSliderTile';
import { mapTestimonialListToProps } from '../../lib/mapToProps';

function TestimonialCarousel({ testimonialList }) {
  return (
    <Carousel
      autoplay
      animation="slide"
      indicators
      cycleNavigation
      swipe
      fullHeightHover
      interval={6000}
    >
      {testimonialList.map((testimonial) => (
        <Box
          key={testimonial._key}
          sx={{
            width: { xs: '100%', md: 'calc(100% - 152px)' },
            marginLeft: 'auto',
            marginRight: 'auto',
            // height: { lg: '260px', md: '216px', sm: '330px', xs: '512px' },
          }}
        >
          <CompanyTile {...mapTestimonialListToProps(testimonial)} />
        </Box>
      ))}
    </Carousel>
  );
}

export default TestimonialCarousel;
