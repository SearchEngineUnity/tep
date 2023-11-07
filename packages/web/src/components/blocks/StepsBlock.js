import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextBlock from '../portableText/serializer/FullIndentSerializer';

function StepsBlock({ steps }) {
  return (
    <>
      {/* tablet-mobile and up */}
      <Box
        component="ol"
        sx={{ listStyle: 'none', padding: 0, display: { sm: 'block', xs: 'none' } }}
      >
        {steps.map((step) => (
          <Typography
            key={step._key}
            component="li"
            sx={{
              display: 'flex',
              gap: '1.875rem',
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main})`,
                backgroundSize: '3px 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                '&:before': {
                  counterIncrement: 'list-item',
                  content: 'counter(list-item)',
                  fontSize: '2.3125rem',
                  fontWeight: 900,
                  width: '72px',
                  height: '72px',
                  backgroundColor: 'primary.main',
                  flex: '0 0 auto',
                  borderRadius: '50%',
                  color: 'common.white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              }}
            />
            <Box
              sx={{
                padding: '24px 0',
                '& .pt-link': {
                  color: `primary.main`,
                  textDecorationColor: 'currentcolor',
                },
              }}
            >
              <Typography variant="h3" gutterBottom>
                {step.title}
              </Typography>
              <TextBlock blocks={step.text} />
            </Box>
          </Typography>
        ))}
      </Box>
      {/* mobile */}
      <Box
        component="ol"
        sx={{ listStyle: 'none', padding: 0, display: { sm: 'none', xs: 'block' } }}
      >
        {steps.map((step) => (
          <Typography
            key={step._key}
            component="li"
            sx={{
              display: 'flex',
              gap: '1.875rem',
            }}
          >
            <Box
              sx={{
                padding: '24px 0',
                '& .pt-link': {
                  color: `primary.main`,
                  textDecorationColor: 'currentcolor',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '8px',
                  paddingBottom: '1rem',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    '&:before': {
                      counterIncrement: 'list-item',
                      content: 'counter(list-item)',
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      width: '35px',
                      height: '35px',
                      backgroundColor: 'primary.main',
                      borderRadius: '50%',
                      color: 'common.white',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  }}
                />
                <Typography variant="h3" gutterBottom sx={{ paddingTop: '3px' }}>
                  {step.title}
                </Typography>
              </Box>
              <TextBlock blocks={step.text} />
            </Box>
          </Typography>
        ))}
      </Box>
    </>
  );
}
export default StepsBlock;
