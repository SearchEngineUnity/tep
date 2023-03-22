import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.proTip.bgColor,
    borderColor: theme.palette.hlBox.proTip.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.proTip.linkColor,
    },
  },
}));

function HighlightProTip({ blockContent, id }) {
  const { classes } = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} sx={{ p: 2 }}>
      <Box sx={{ display: 'inline-flex', mb: '0.8125em' }}>
        <ThumbUpOutlined sx={{ alignSelf: 'center', color: 'hlBox.proTip.iconColor' }} />
        <Typography
          component="p"
          variant="h4"
          className={classes.text}
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
