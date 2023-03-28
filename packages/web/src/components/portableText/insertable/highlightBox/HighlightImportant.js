import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ErrorOutlineOutlined from '@mui/icons-material/ErrorOutlineOutlined';
import TextContent from '../../serializer/HighlightBoxSerializer';

function HighlightImportant({ blockContent, id }) {
  return (
    <Box
      component={Paper}
      variant="outlined"
      key={id}
      sx={{
        p: 2,
        bgcolor: 'hlBox.important.bgColor',
        borderColor: 'hlBox.important.borderColor',
        '& .pt-link': { color: 'hlBox.important.linkColor' },
      }}
    >
      <Box sx={{ display: 'inline-flex', mb: '0.8125em' }}>
        <ErrorOutlineOutlined sx={{ alignSelf: 'center', color: 'hlBox.important.iconColor' }} />
        <Typography
          component="p"
          variant="h4"
          sx={{ color: 'hlBox.important.textColor', marginLeft: '8px' }}
        >
          Important
        </Typography>
      </Box>
      <Box sx={{ color: 'hlBox.important.textColor' }}>
        <TextContent blocks={blockContent} />
      </Box>
    </Box>
  );
}

export default HighlightImportant;
