/* eslint-disable import/no-cycle */
import { PortableText } from '@portabletext/react';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import VideoEmbed from '../insertable/VideoEmbed';
import Illustration from '../insertable/Illustration';
import HighlightBox from '../insertable/HighlightBox';
import SmartTable from '../insertable/SmartTable';
import JumpLink from '../../link/JumpLink';
import AffiliateLink from '../../link/LinkAffiliate';
import ExternalLink from '../../link/LinkExternal';
import InternalGlobal from '../../link/LinkInternalGlobal';
import InternalLocal from '../../link/LinkInternalLocal';
import ConditionalButton from '../../buttons/ConditionalButton';
import SmartOrderedList from '../insertable/SmartOrderedList';
import SmartUnorderedList from '../insertable/SmartUnorderedList';
import ProductCard from '../insertable/productCard/ProductCard';
import ClickableImage from '../insertable/ClickableImage';
import SmartGrid from '../insertable/SmartGrid/SmartGrid';
import VerticalSpacingWrapper from '../insertable/VerticalSpacingWrapper';
import PTHeadingTypography from './PTHeadingTypography';

const serializers = {
  block: {
    normal: ({ children }) => {
      return children[0] ? (
        <Typography gutterBottom variant="body1" sx={{ fontSize: '14px' }}>
          {children}
        </Typography>
      ) : (
        <br />
      );
    },
    h2: ({ value, children }) => (
      <PTHeadingTypography
        variant="h2"
        id={
          value.markDefs.length !== 0
            ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
            : undefined
        }
        sx={{ fontSize: '28px', mb: '11px' }}
      >
        {children}
      </PTHeadingTypography>
    ),
    h3: ({ value, children }) => (
      <PTHeadingTypography
        variant="h3"
        id={
          value.markDefs.length !== 0
            ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
            : undefined
        }
        sx={{ fontSize: '24.5px', mb: '11px' }}
      >
        {children}
      </PTHeadingTypography>
    ),
    h4: ({ value, children }) => (
      <PTHeadingTypography
        variant="h4"
        id={
          value.markDefs.length !== 0
            ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
            : undefined
        }
        sx={{ fontSize: '21px', mb: '11px' }}
      >
        {children}
      </PTHeadingTypography>
    ),
    h5: ({ value, children }) => (
      <PTHeadingTypography
        variant="h5"
        id={
          value.markDefs.length !== 0
            ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
            : undefined
        }
        sx={{ fontSize: '17.5px', mb: '11px' }}
      >
        {children}
      </PTHeadingTypography>
    ),
    h6: ({ value, children }) => (
      <PTHeadingTypography
        variant="h6"
        id={
          value.markDefs.length !== 0
            ? value.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
            : undefined
        }
        sx={{ fontSize: '15px', mb: '11px' }}
      >
        {children}
      </PTHeadingTypography>
    ),
    blockquote: ({ children }) => (
      <Typography
        component="blockquote"
        variant="h3"
        gutterBottom
        sx={(theme) => ({
          fontWeight: 100,
          pl: 4,
          py: 1,
          borderLeft: `4px solid ${theme.palette.primary.main}`,
        })}
      >
        &#8220; {children} &#8221;
      </Typography>
    ),
  },
  types: {
    illustration: ({ value }) => (
      <VerticalSpacingWrapper>
        <Illustration illustration={value} />
      </VerticalSpacingWrapper>
    ),
    highlightBox: ({ value }) => (
      <VerticalSpacingWrapper>
        <HighlightBox box={value} />
      </VerticalSpacingWrapper>
    ),
    smartTable: ({ value }) => (
      <VerticalSpacingWrapper>
        <SmartTable smartTable={value} />
      </VerticalSpacingWrapper>
    ),
    videoEmbed: ({ value }) => (
      <VerticalSpacingWrapper>
        <VideoEmbed url={value.url} ratio={value.ratio} />
      </VerticalSpacingWrapper>
    ),
    btnBlockMui: ({ value }) => (
      <VerticalSpacingWrapper>
        <ConditionalButton condition={value.link[0]._type} values={value} />
      </VerticalSpacingWrapper>
    ),
    smartOrderedList: ({ value }) => <SmartOrderedList {...value} />,
    smartUnorderedList: ({ value }) => <SmartUnorderedList {...value} />,
    productCard: ({ value }) => (
      <VerticalSpacingWrapper>
        <ProductCard {...value} />
      </VerticalSpacingWrapper>
    ),
    clickableImage: ({ value }) => (
      <VerticalSpacingWrapper>
        <ClickableImage {...value} />
      </VerticalSpacingWrapper>
    ),
    smartGrid: ({ value }) => <SmartGrid {...value} />,
  },
  marks: {
    hashId: ({ children }) => children,
    internalLocal: ({ value, children }) => {
      const { newTab, href } = value;
      return (
        <InternalLocal href={href} newTab={newTab} className="pt-link">
          {children}
        </InternalLocal>
      );
    },
    internalGlobal: ({ value, children }) => {
      const { href, newTab } = value;
      return (
        <InternalGlobal href={href} newTab={newTab} className="pt-link">
          {children}
        </InternalGlobal>
      );
    },
    externalLink: ({ value, children }) => {
      const { href, noreferrer, newTab } = value;
      return (
        <ExternalLink href={href} noreferrer={noreferrer} newTab={newTab} className="pt-link">
          {children}
        </ExternalLink>
      );
    },
    affiliateLink: ({ value, children }) => {
      const { href } = value;
      return (
        <AffiliateLink href={href} className="pt-link">
          {children}
        </AffiliateLink>
      );
    },
    jumpLink: ({ value, children }) => {
      const { hashId } = value;
      return (
        <JumpLink hash={hashId} className="pt-link">
          {children}
        </JumpLink>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <Box
        component="ul"
        sx={{ listStyleType: 'disc', ml: '1.4rem', pl: 0, '& > li': { position: 'relative' } }}
      >
        {children}
      </Box>
    ),
    number: ({ children }) => (
      <Box
        component="ol"
        sx={{ listStyleType: 'decimal', ml: '1.4rem', pl: 0, '& > li': { position: 'relative' } }}
      >
        {children}
      </Box>
    ),
  },
  listItem: ({ children }) => (
    <Typography variant="body1" component="li" sx={{ fontSize: '14px' }}>
      {children}
    </Typography>
  ),
};

function BlockContent({ blocks }) {
  return <PortableText value={blocks} components={serializers} />;
}

export default BlockContent;
