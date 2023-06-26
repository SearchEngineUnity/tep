/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Modal from '@mui/material/Modal';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../../lib/sanityConfig';
import ProductCardFlexSegment from './ProductCardFlexSegment';
import ProductInfoList from './ProductInfoList';
import ProductCardRating from './ProductCardRating';
import ConditionalButton from '../../../buttons/ConditionalButton';
import Caption from '../../serializer/CaptionSerializer';
import { mapMuiBtnToProps } from '../../../../lib/mapToProps';
import { determineColor } from '../../../../lib/helperFunctions';

function ProductCardTopeCommerce({
  name,
  headingLevel,
  rating,
  image,
  tagText,
  tagColor,
  infoList,
  topBtn,
  segments,
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'constrained',
    },
    sanityConfig,
  );

  return (
    <>
      {tagText && <br />}
      <Box sx={{ position: 'relative' }}>
        <Card>
          {tagText && (
            <Paper
              elevation={3}
              square
              sx={{
                backgroundColor: determineColor(tagColor?.color) || 'black',
                color: '#fff',
                position: 'absolute',
                top: '-20px',
                left: '-10px',
                display: 'inline-block',
                padding: '8px 16px',
                fontSize: '1rem',
                lineHeight: '1rem',
                fontWeight: 'bold',
                '&:after': {
                  content: '" "',
                  display: 'block',
                  position: 'absolute',
                  left: '-10px',
                  bottom: '-7px',
                  borderWidth: '0 10px 7px',
                  borderColor: `rgba(0, 0, 0, 0) ${
                    determineColor(tagColor?.color) || 'black'
                  } rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)`,
                  borderStyle: 'inset solid inset inset',
                  filter: ' brightness(50%)',
                },
              }}
            >
              {tagText}
            </Paper>
          )}
          <Box sx={{ m: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <Box
                  component={Box}
                  as="figure"
                  sx={{ m: 0, display: { xs: 'none', sm: 'block' } }}
                >
                  <ButtonBase
                    type="button"
                    onClick={handleOpen}
                    focusVisibleClassName={{}}
                    sx={{
                      border: 'none',
                      background: 'none',
                      height: 'auto',
                      width: '100%',
                      cursor: 'pointer',
                    }}
                  >
                    <GatsbyImage
                      image={imageData}
                      alt={image?.alt}
                      style={{ display: 'block', maxWidth: '100%', maxHeight: '240px' }}
                      objectFit="contain"
                    />
                    <Box
                      sx={(theme) => ({
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        bgcolor: 'common.black',
                        opacity: 0,
                        width: '100%',
                        transition: theme.transitions.create('opacity'),
                        color: 'white',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                          zIndex: 1,
                          opacity: 0.4,
                        },
                      })}
                    >
                      <ZoomInIcon sx={{ fontSize: '120px' }} />
                    </Box>
                  </ButtonBase>

                  {image.caption && (
                    <Box
                      component={Caption}
                      as="figcaption"
                      sx={{
                        textAlign: 'center',
                        '& .pt-link': {
                          color: 'text.primary',
                          textDecorationColor: 'currentcolor',
                        },
                      }}
                    >
                      <Caption blocks={image.caption} />
                    </Box>
                  )}
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        width: { xs: '80vw', md: '50vw' },
                        height: { xs: '80vh', md: '50vh' },
                        bgcolor: 'background.paper',
                        border: 'none',
                        boxShadow: 5,
                        p: 2,
                        justifyContent: 'center',
                      }}
                    >
                      <GatsbyImage
                        image={imageData}
                        alt={image?.alt}
                        objectFit="contain"
                        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                      />
                    </Box>
                  </Modal>
                </Box>
                <Box
                  component={Box}
                  as="figure"
                  sx={{
                    m: 0,
                    display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
                  }}
                >
                  <GatsbyImage
                    image={imageData}
                    alt={image?.alt}
                    style={{ display: 'block', maxWidth: '100%', maxHeight: '240px' }}
                    objectFit="contain"
                  />
                  {image.caption && (
                    <Box
                      component={Caption}
                      as="figcaption"
                      sx={{
                        textAlign: 'center',
                        '& .pt-link': {
                          color: 'text.primary',
                          textDecorationColor: 'currentcolor',
                        },
                      }}
                    >
                      <Caption blocks={image.caption} />
                    </Box>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography component={headingLevel || 'p'} variant="h4">
                  {name}
                </Typography>
                <Box sx={{ mt: 0.5 }}>
                  <ProductCardRating rating={rating} />
                </Box>
                <Box
                  sx={{
                    mt: 3,
                    display: {
                      xs: 'none',
                      sm: 'inline-flex',
                      md: 'inline-flex',
                      lg: 'inline-flex',
                      xl: 'inline-flex',
                    },
                  }}
                >
                  <Box sx={{ mr: 3 }}>
                    <ConditionalButton {...mapMuiBtnToProps(topBtn)} />
                  </Box>
                  <Box sx={{ mr: 3 }}>
                    <ConditionalButton {...mapMuiBtnToProps(topBtn)} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    mr: 3,
                    display: {
                      xs: 'inline-flex',
                      sm: 'none',
                      md: 'none',
                      lg: 'none',
                      xl: 'none',
                      flexDirection: 'column',
                    },
                  }}
                >
                  <Box sx={{ mt: 3 }}>
                    <ConditionalButton {...mapMuiBtnToProps(topBtn)} />
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    <ConditionalButton {...mapMuiBtnToProps(topBtn)} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ mt: 3 }}>
              <ProductInfoList infoList={infoList} />
            </Box>
          </Box>
          {segments.map((segment) => {
            const { _type, _key } = segment;
            switch (_type) {
              case 'productCardFlexSegment':
                return <ProductCardFlexSegment key={_key} {...segment} />;
              default:
                return <div key="default-inner-block"> Block still under development</div>;
            }
          })}
        </Card>
      </Box>
    </>
  );
}

export default ProductCardTopeCommerce;
