import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined';
import TextContent from '../../serializer/HighlightBoxSerializer';

function HighlightProTip({ blockContent, id }) {
  return (
    <Box
      component={Paper}
      variant="outlined"
      key={id}
      sx={{
        p: 2,
        bgcolor: 'hlBox.proTip.bgColor',
        borderColor: 'hlBox.proTip.borderColor',
        '& .pt-link': { color: 'hlBox.proTip.linkColor' },
      }}
    >
      <Box sx={{ display: 'inline-flex', mb: '0.8125em' }}>
        <ThumbUpOutlined sx={{ alignSelf: 'center', color: 'hlBox.proTip.iconColor' }} />
        <Typography
          component="p"
          variant="h4"
          sx={{ color: 'hlBox.proTip.textColor', marginLeft: '8px' }}
        >
          Pro Tip
        </Typography>
      </Box>
      <Box sx={{ color: 'hlBox.proTip.textColor' }}>
        <TextContent blocks={blockContent} />
      </Box>
    </Box>
  );
}

export default HighlightProTip;
