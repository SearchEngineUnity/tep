import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import WarningOutlined from '@mui/icons-material/WarningOutlined';
import TextContent from '../../serializer/HighlightBoxSerializer';

function HighlightWarning({ blockContent, id }) {
  return (
    <Box
      component={Paper}
      variant="outlined"
      key={id}
      sx={{
        p: 2,
        bgcolor: 'hlBox.warning.bgColor',
        borderColor: 'hlBox.warning.borderColor',
        '& .pt-link': { color: 'hlBox.warning.linkColor' },
      }}
    >
      <Box sx={{ display: 'inline-flex', mb: '0.8125em' }}>
        <WarningOutlined sx={{ alignSelf: 'center', color: 'hlBox.warning.iconColor' }} />
        <Typography
          component="p"
          variant="h4"
          sx={{ color: 'hlBox.warning.textColor', marginLeft: '8px' }}
        >
          Warning
        </Typography>
      </Box>
      <Box sx={{ color: 'hlBox.warning.textColor' }}>
        <TextContent blocks={blockContent} />
      </Box>
    </Box>
  );
}

export default HighlightWarning;
