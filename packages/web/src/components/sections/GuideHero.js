import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImgBlock from '../blocks/FluidImgBlock';
import Subtitle from '../portableText/serializer/HeroSubtitleSerializer';
import ProgressBar from '../ScrollProgressBar';
import { mapFluidImgBlockToProps } from '../../lib/mapToProps';
import { useSpGuideHero } from '../../hooks/useSpGuideHero';
import { useDisclaimerText } from '../../hooks/useDisclaimerText';

function GuideHero({ h1, subtitle, date, image, includeDisclaimer }) {
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const heroAlignment = useSpGuideHero();
  const disclaimerText = useDisclaimerText();

  return (
    <>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: { xs: '16px', md: '40px' },
          '& .pt-link': {
            color: 'secondary.main',
          },
          '& .caption-text': {
            color: 'white',
          },
          '& .caption-link': {
            color: 'white',
          },
        }}
        id="hero"
        component="section"
      >
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems={heroAlignment.heroLrAlignment}
            spacing={6}
            component="header"
          >
            <Grid item md={6} xs={12}>
              <Typography variant="h1" gutterBottom>
                {h1}
              </Typography>
              {subtitle && <Subtitle blocks={subtitle} />}
              {lastUpdatedDate && (
                <Typography variant="body1" component="p" gutterBottom>
                  Last updated: {lastUpdatedDate.toLocaleDateString('en-US', options)}
                </Typography>
              )}
              <br />
              {includeDisclaimer && disclaimerText && <Subtitle blocks={disclaimerText} />}
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={{ display: 'flex', justifyContent: heroAlignment.heroImgAlignment }}>
                <ImgBlock
                  {...mapFluidImgBlockToProps(image)}
                  loading="eager"
                  style={{ color: 'white' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ProgressBar />
    </>
  );
}

export default GuideHero;
