import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ImgBlock from '../blocks/FluidImgBlock';
import Video from '../portableText/insertable/Video';
import SectionBlock from '../blocks/SectionBlock';
import ConditionalButton from '../buttons/ConditionalButton';
import GridFlex from '../blocks/BlockGridFlex';
import BlockFormNetlify from '../blocks/BlockFormNetlify';
import TestimonialGrid from '../blocks/TestimonialGrid';
import ClickableImage from '../portableText/insertable/ClickableImage';
import SmartGridBlock from '../blocks/SmartGridBlock';
import AccordionBlock from '../portableText/insertable/Accordion';
import StepsBlock from '../blocks/StepsBlock';
import {
  mapFluidImgBlockToProps,
  mapSectionBlockToProps,
  mapMuiBtnToProps,
  mapGridFlexToProps,
  mapBlockFormNetlifyToProps,
  mapTestimonialGridToProps,
  mapClickableImageToProps,
  mapSmartGridBlockToProps,
  mapVideoToProps,
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
        <Grid container justifyContent="center" spacing={5}>
          {blocks.map((block) => {
            const { _type, _key } = block;
            const col = stackColCalculator(parseInt(blockWidth, 10));
            const blockSelector = (key) => {
              switch (true) {
                case key === 'stepsBlock':
                  return (
                    <Grid {...col}>
                      <StepsBlock steps={block._rawSteps} />
                    </Grid>
                  );
                case key === 'accordionBlock':
                  return (
                    <Grid {...col}>
                      <AccordionBlock accordionSet={block._rawAccordionSet} />
                    </Grid>
                  );
                case key === 'smartGridBlock':
                  return (
                    <SmartGridBlock
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
                case key === 'video':
                  return (
                    <Grid {...col}>
                      <Video {...mapVideoToProps(block)} />
                    </Grid>
                  );
                case key === 'imageBlock':
                  return (
                    <Grid {...col}>
                      <ImgBlock {...mapFluidImgBlockToProps(block)} loading="eager" />
                    </Grid>
                  );
                case key === 'sectionBlock':
                  return (
                    <Grid {...col}>
                      <SectionBlock
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
                    </Grid>
                  );
                case key === 'gridFlex':
                  return (
                    <GridFlex
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
                  return (
                    <Grid {...col}>
                      <ClickableImage {...mapClickableImageToProps(block)} />
                    </Grid>
                  );
                case key === 'blockFormNetlify':
                  return (
                    <Grid {...col}>
                      <BlockFormNetlify {...mapBlockFormNetlifyToProps(block)} />
                    </Grid>
                  );
                case key === 'btnBlockMui':
                  return (
                    <Grid {...col}>
                      <ConditionalButton {...mapMuiBtnToProps(block)} />
                    </Grid>
                  );
                case key === 'testimonialGrid':
                  return (
                    <Grid {...col}>
                      <TestimonialGrid
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
                    </Grid>
                  );
                default:
                  return <div> Block still under development</div>;
              }
            };
            return <React.Fragment key={_key}>{blockSelector(_type)}</React.Fragment>;
          })}
        </Grid>
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
