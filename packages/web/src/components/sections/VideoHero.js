import React from 'react';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import Box from '@mui/material/Box';
import { GatsbyImage } from 'gatsby-plugin-image';
import ConditionalButton from '../buttons/ConditionalButton';
import SectionInnerWrapper from './SectionInnerWrapper';
import { determineColor } from '../../lib/helperFunctions';
import sanityConfig from '../../lib/sanityConfig';

function VideoHero({ idTag, heading, button, logoAlt, logoImage, videoUrl, designSettings }) {
  const imageData = getGatsbyImageData(logoImage, {}, sanityConfig);
  const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
  const backgroundColor = determineColor(designSettings?.background?.color) || 'primary.main';
  const desktopPadding = designSettings?.outerPadding?.desktopPadding;
  const tabletPadding = designSettings?.outerPadding?.tabletPadding;
  const tabletMobilePadding = designSettings?.outerPadding?.tabletMobilePadding;
  const mobilePadding = designSettings?.outerPadding?.mobilePadding;

  return (
    <Box
      id={idTag}
      sx={{
        py: 5,
        width: '100%',
        position: 'relative',
        zIndex: '0',
        minHeight: { lg: '700px', md: '500px', sm: '400px', xs: '100vw' },
        display: 'flex',
        flexDirection: 'stack',
        alignItems: 'flex-end',
      }}
    >
      <Box
        sx={{
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '-1',
          width: '100vw',
          backgroundColor,
        }}
      >
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          sx={{
            height: '100%',
            objectFit: 'cover',
            width: '100%',
            overflowClipMargin: 'content-box',
            overflow: 'clip',
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </Box>
      </Box>
      <Box
        sx={
          ([
            (theme) => ({
              padding: {
                lg: desktopPadding || theme.customSpacing.sectionOuter.padding.desktop,
                md: tabletPadding || theme.customSpacing.sectionOuter.padding.tablet,
                sm: tabletMobilePadding || theme.customSpacing.sectionOuter.padding.tabletMobile,
                xs: mobilePadding || theme.customSpacing.sectionOuter.padding.mobile,
              },
            }),
          ],
          { width: '100%' })
        }
      >
        <SectionInnerWrapper designSettings={designSettings}>
          <GatsbyImage
            image={imageData}
            loading="eager"
            objectFit="contain"
            alt={logoAlt}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <Box
            component="h1"
            textAlign="center"
            sx={{
              color: headingColor,
              fontSize: { xl: '48px', md: '36px', xs: '24px' },
              fontWeight: 600,
              py: '0.25em',
            }}
          >
            {heading}
          </Box>
          <ConditionalButton
            {...button}
            disableElevation
            disableFocusRipple
            disableRipple
            borderRadius="4px"
            alignment="center"
            typography={{
              fontWeight: 900,
              fontSize: '20px',
              lineHeight: '1.2',
            }}
            padding="12px 24px"
            border="solid 2px"
          />
        </SectionInnerWrapper>
      </Box>
    </Box>
  );
}

export default VideoHero;
