import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import MenuBook from '@mui/icons-material/MenuBook';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.definition.bgColor,
    borderColor: theme.palette.hlBox.definition.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.definition.linkColor,
    },
  },
}));

function HighlightDefinition({ blockContent, id }) {
  const { classes } = useStyles();

  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} sx={{ p: 2 }}>
      <Box sx={{ display: 'inline-flex', mb: '0.8125em' }}>
        <MenuBook sx={{ alignSelf: 'center', color: 'hlBox.definition.iconColor' }} />
        <Typography
          component="p"
          variant="h4"
          className={classes.text}
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
