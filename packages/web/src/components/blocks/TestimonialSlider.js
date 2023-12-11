import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import CompanyTile from '../testimonialTiles/TestimonialSliderTile';
import { mapTestimonialListToProps } from '../../lib/mapToProps';

function TestimonialSlider({ testimonialList }) {
  const [currentPage, setCurrentPage] = useState(0);

  const [slideDirection, setSlideDirection] = useState('left');

  const cardsPerPage = 1;

  const handleNextPage = () => {
    setSlideDirection('left');
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection('right');
    setCurrentPage((prevPage) => prevPage - 1);
  };
  return (
    //  outer box that holds the carousel and the buttons
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        // height: { lg: '260px', md: '216px', sm: '330px', xs: '600px' },
      }}
    >
      <IconButton onClick={handlePrevPage} disabled={currentPage === 0}>
        {/* this is the button that will go to the previous page you can change these icons to whatever you wish */}
        <NavigateBeforeIcon
          sx={{ width: { xs: '24px', md: '70px' }, height: { xs: '24px', md: '70px' } }}
        />
      </IconButton>
      <Box sx={{ width: '100%', height: '100%' }}>
        {/* this is the box that holds the cards and the slide animation,
        in this implementation the card is already constructed but in later versions you will see how the
        items you wish to use will be dynamically created with the map method */}
        {testimonialList.map((card, index) => (
          <Box
            // need to update key info
            key="card"
            sx={{
              width: '100%',
              height: '100%',
              display: currentPage === index ? 'block' : 'none',
            }}
          >
            {/* this is the slide animation that will be used to slide the cards in and out */}
            <Slide direction={slideDirection} in={currentPage === index}>
              <Stack
                spacing={2}
                direction="row"
                alignContent="center"
                justifyContent="center"
                sx={{ width: '100%', height: '100%' }}
              >
                {/* this slices the cards array to only display the amount you have previously determined per page */}
                {testimonialList
                  .slice(index * cardsPerPage, index * cardsPerPage + cardsPerPage)
                  .map((testimonial) => (
                    <CompanyTile
                      key={testimonial._key}
                      {...mapTestimonialListToProps(testimonial)}
                    />
                  ))}
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handleNextPage}
        disabled={currentPage >= Math.ceil((testimonialList.length || 0) / cardsPerPage) - 1}
      >
        <NavigateNextIcon
          sx={{ width: { xs: '24px', md: '70px' }, height: { xs: '24px', md: '70px' } }}
        />
      </IconButton>
    </Box>
  );
}

export default TestimonialSlider;
