import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionText from '../portableText/serializer/FullIndentSerializer';

export default function AccordionBlock({ accordionSet }) {
  return (
    <>
      {accordionSet.map((item) => (
        <Accordion
          key={item._Key}
          disableGutters
          square
          sx={{
            boxShadow: 'none',
            paddingY: '1rem',
            borderBottom: (theme) => `solid 1px ${theme.palette.primary.main}`,
            '&:before': { height: '0px' },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ paddingX: 0 }}
          >
            <Typography component="p" variant="h3" sx={{ color: 'primary.main' }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              paddingX: 0,
              paddingY: '1rem',
              '& .pt-link': {
                color: `primary.main`,
                textDecorationColor: 'currentcolor',
              },
            }}
          >
            <AccordionText blocks={item.text} />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
