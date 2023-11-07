import * as React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionText from '../serializer/FullIndentSerializer';

export default function Accordion({ accordionSet }) {
  return (
    <>
      {accordionSet.map((item) => (
        <MuiAccordion
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
            }}
          >
            <AccordionText blocks={item.text} />
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
}
