import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImgBlock from '../blocks/FluidImgBlock';
import Video from '../portableText/insertable/Video';
import ProductGrid from '../portableText/insertable/productGrid/ProductGrid';
import Subtitle from '../portableText/serializer/H1SubtitleSerializer';
import Disclaimer from '../portableText/serializer/DisclaimerSerializer';
import { mapFluidImgBlockToProps, mapProductGridToProps } from '../../lib/mapToProps';
import { useDisclaimerText } from '../../hooks/useDisclaimerText';

const featureComponentMapping = {
  image: ImgBlock,
  video: Video,
  productGrid: ProductGrid,
};

const propsMapping = (type, props) => {
  switch (type) {
    case 'image':
      return {
        ...mapFluidImgBlockToProps(props.image),
        loading: 'eager',
      };
    case 'video':
      return { url: props?.video?.url, stackHero: 'true' };
    case 'productGrid':
      return { ...mapProductGridToProps(props.productGrid) };
    default:
      return props;
  }
};

function StackGuideHero({ featureType, h1, subtitle, date, feature, includeDisclaimer }) {
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const disclaimerText = useDisclaimerText();

  const Feature = featureComponentMapping[featureType];

  const values = propsMapping(featureType, feature);

  const errorMessage = 'No matching Feature component';

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        color: 'primary.contrastText',
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
    >
      <Box
        sx={{
          bgcolor: 'primary.main',
          py: { xs: '16px', md: '40px' },
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" gutterBottom>
            {h1}
          </Typography>
          {subtitle && <Subtitle blocks={subtitle} />}
          {lastUpdatedDate && (
            <Typography variant="body1" component="p" gutterBottom>
              Last updated: {lastUpdatedDate.toLocaleDateString('en-US', options)}
            </Typography>
          )}
          {includeDisclaimer && disclaimerText && (
            <>
              <br />
              <Disclaimer blocks={disclaimerText} />
            </>
          )}
        </Container>
      </Box>
      <Box
        sx={(theme) => ({
          py: { xs: '16px', md: '40px' },
          background: {
            xs: `linear-gradient(${theme.palette.primary.main} 0%, ${theme.palette.primary.main} ${
              featureType === 'productGrid' ? '10%' : '30%'
            }, ${theme.palette.background.default} ${
              featureType === 'productGrid' ? '10%' : '30%'
            }, ${theme.palette.background.default} 100%)`,
            lg: `linear-gradient(${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 30%, ${theme.palette.background.default} 30%, ${theme.palette.background.default} 100%)`,
          },
          color: 'text.primary',
          '& .caption-text': {
            color: 'text.primary',
          },
          '& .caption-link': {
            color: 'text.primary',
            textDecorationColor: 'inherit',
          },
        })}
      >
        <Container maxWidth="lg">{Feature ? <Feature {...values} /> : errorMessage}</Container>
      </Box>
    </Box>
  );
}

export default StackGuideHero;
