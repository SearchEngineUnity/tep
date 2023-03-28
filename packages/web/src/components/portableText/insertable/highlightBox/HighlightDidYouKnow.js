import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import EmojiObjectsOutlined from '@mui/icons-material/EmojiObjectsOutlined';
import TextContent from '../../serializer/HighlightBoxSerializer';

function HighlightDidYouKnow({ blockContent, id }) {
  return (
    <Box
      component={Paper}
      variant="outlined"
      key={id}
      sx={{
        p: 2,
        bgcolor: 'hlBox.dyk.bgColor',
        borderColor: 'hlBox.dyk.borderColor',
        '& .pt-link': { color: 'hlBox.dyk.linkColor' },
      }}
    >
      <Box sx={{ display: 'inline-flex', mb: '0.8125em' }}>
        <EmojiObjectsOutlined sx={{ alignSelf: 'center', color: 'hlBox.dyk.iconColor' }} />
        <Typography
          component="p"
          variant="h4"
          sx={{ color: 'hlBox.dyk.textColor', marginLeft: '8px' }}
        >
          Did You Know
        </Typography>
      </Box>
      <Box sx={{ color: 'hlBox.dyk.textColor' }}>
        <TextContent blocks={blockContent} />
      </Box>
    </Box>
  );
}

export default HighlightDidYouKnow;
