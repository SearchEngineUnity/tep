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

function ProductCard({
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
          {/* Product Card Tops go here */}
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

export default ProductCard;
