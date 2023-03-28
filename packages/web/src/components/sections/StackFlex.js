import React from 'react';
import Grid from '@mui/material/Grid';
import ImgBlock from '../blocks/FluidImgBlock';
import VideoBlock from '../blocks/VideoBlock';
import SectionBlock from '../blocks/SectionBlock';
import ButtonAffiliate from '../buttons/ButtonAffiliate';
import ButtonExternal from '../buttons/ButtonExternal';
import ButtonInternalGlobal from '../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../buttons/ButtonInternalLocal';
import ButtonJumpLink from '../buttons/ButtonJumpLink';
import GridFlex from '../blocks/BlockGridFlex';
import BlockFormNetlify from '../blocks/BlockFormNetlify';
import TestimonialGrid from '../blocks/TestimonialGrid';
import ClickableImage from '../portableText/insertable/ClickableImage';
import SmartGridBlock from '../blocks/SmartGridBlock';
import {
  mapFluidImgBlockToProps,
  mapSectionBlockToProps,
  mapMuiBtnToProps,
  mapGridFlexToProps,
  mapBlockFormNetlifyToProps,
  mapTestimonialGridToProps,
  mapClickableImageToProps,
  mapSmartGridBlockToProps,
} from '../../lib/mapToProps';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import SectionOuterWrapper from './SectionOuterWrapper';
import SectionInnerWrapper from './SectionInnerWrapper';
import { determineColor, stackColCalculator } from '../../lib/helperFunctions';

function StackFlex({
  idTag,
  heading,
  subheading,
  subtitle,
  blocks,
  footer,
  blockWidth,
  headerAlignment,
  footerAlignment,
  designSettings,
}) {
  const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  return (
    <SectionOuterWrapper idTag={idTag} designSettings={designSettings}>
      <SectionInnerWrapper designSettings={designSettings}>
        <StructuredSectionHeader
          heading={heading}
          subheading={subheading}
          subtitle={subtitle}
          headingColor={headingColor}
          subheadingColor={subheadingColor}
          subtitleColor={subtitleColor}
          align={headerAlignment}
        />
        {blocks.map((block) => {
          const { _type, _key } = block;
          const col = stackColCalculator(parseInt(blockWidth, 10));
          const blockSelector = (key) => {
            switch (true) {
              case key === 'smartGridBlock':
                return (
                  <SmartGridBlock
                    key={block._key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapSmartGridBlockToProps(block)}
                  />
                );
              case key === 'videoBlock':
                return <VideoBlock url={block.url} ratio={block.ratio} key={_key} />;
              case key === 'imageBlock':
                return <ImgBlock {...mapFluidImgBlockToProps(block)} key={_key} />;
              case key === 'sectionBlock':
                return (
                  <SectionBlock
                    key={_key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapSectionBlockToProps(block)}
                  />
                );
              case key === 'gridFlex':
                return (
                  <GridFlex
                    key={_key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapGridFlexToProps(block)}
                  />
                );
              case key === 'clickableImage':
                return <ClickableImage {...mapClickableImageToProps(block)} />;
              case key === 'blockFormNetlify':
                return <BlockFormNetlify key={block._key} {...mapBlockFormNetlifyToProps(block)} />;
              case key === 'btnBlockMui' && block.link[0]._type === 'jumpLink':
                return <ButtonJumpLink key={_key} {...mapMuiBtnToProps(block)} />;
              case key === 'btnBlockMui' && block.link[0]._type === 'affiliateLink':
                return <ButtonAffiliate key={_key} {...mapMuiBtnToProps(block)} />;
              case key === 'btnBlockMui' && block.link[0]._type === 'externalLink':
                return <ButtonExternal key={_key} {...mapMuiBtnToProps(block)} />;
              case key === 'btnBlockMui' && block.link[0]._type === 'internalGlobal':
                return <ButtonInternalGlobal key={_key} {...mapMuiBtnToProps(block)} />;
              case key === 'btnBlockMui' && block.link[0]._type === 'internalLocal':
                return <ButtonInternalLocal key={_key} {...mapMuiBtnToProps(block)} />;
              case key === 'testimonialGrid':
                return (
                  <TestimonialGrid
                    key={_key}
                    hasSectionHeading={!!heading}
                    hasSectionSubheading={!!subheading}
                    hasSectionFooter={!!footer}
                    hasSectionSubtitle={!!subtitle}
                    headingColor={headingColor}
                    subheadingColor={subheadingColor}
                    subtitleColor={subtitleColor}
                    footerColor={footerColor}
                    {...mapTestimonialGridToProps(block)}
                  />
                );
              default:
                return <div key="default-inner-block"> Block still under development</div>;
            }
          };
          return (
            <Grid container justifyContent="center" spacing={6} key={_key}>
              <Grid item {...col}>
                {blockSelector(_type)}
              </Grid>
            </Grid>
          );
        })}
        <StructuredSectionFooter
          footer={footer}
          footerColor={footerColor}
          align={footerAlignment}
        />
      </SectionInnerWrapper>
    </SectionOuterWrapper>
  );
}

export default StackFlex;
