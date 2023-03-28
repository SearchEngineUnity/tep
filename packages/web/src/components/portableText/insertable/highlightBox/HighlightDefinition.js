import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MenuBook from '@mui/icons-material/MenuBook';
import TextContent from '../../serializer/HighlightBoxSerializer';

function HighlightDefinition({ blockContent, id }) {
  return (
    <Box
      component={Paper}
      variant="outlined"
      key={id}
      sx={{
        p: 2,
        bgcolor: 'hlBox.definition.bgColor',
        borderColor: 'hlBox.definition.borderColor',
        '& .pt-link': { color: 'hlBox.definition.linkColor' },
      }}
    >
      <Box sx={{ display: 'inline-flex', mb: '0.8125em' }}>
        <MenuBook sx={{ alignSelf: 'center', color: 'hlBox.definition.iconColor' }} />
        <Typography
          component="p"
          variant="h4"
          sx={{ color: 'hlBox.definition.textColor', marginLeft: '8px' }}
        >
          Definition
        </Typography>
      </Box>
      <Box sx={{ color: 'hlBox.definition.textColor' }}>
        <TextContent blocks={blockContent} />
      </Box>
    </Box>
  );
}

export default HighlightDefinition;
