import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from '@mui/styles';
import sanityConfig from '../../lib/sanityConfig';

const StyledCard = styled(Card)(({ theme }) => ({
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  height: '100%',
}));

const StyledCardContent = styled(CardContent)(() => ({
  padding: '8px 16px',
  '&:last-child': {
    paddingBottom: '8px',
  },
}));

function TestimonialImage({ image, alt, name, text, role, company }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  const printedRole = role && `, ${role}`;
  const printedCompany = company && `, ${company}`;

  return (
    <StyledCard elevation={0} square>
      <StyledCardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm>
            <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: '16px' }}>
              {text}
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 'fontWeightBold' }}>
              {'- '}
              {name}
              {printedRole}
              {printedCompany}
            </Typography>
          </Grid>
          <Grid item>
            {image ? (
              <GatsbyImage
                image={imageData}
                alt={alt || ''}
                style={{ width: '100px', height: '100px', borderRadius: '50px' }}
              />
            ) : (
              <Avatar sx={{ width: '100px', height: '100px', fontSize: 'h2.fontSize' }}>
                {name[0].toUpperCase()}
              </Avatar>
            )}
          </Grid>
        </Grid>
      </StyledCardContent>
    </StyledCard>
  );
}

export default TestimonialImage;
