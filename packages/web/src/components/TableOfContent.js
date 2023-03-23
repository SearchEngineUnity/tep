import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useHeadsObserver } from '../hooks/useHeadObserver';

const useStyles = makeStyles()((theme) => ({
  activeLink: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
}));

function TableOfContent({ toc }) {
  const { classes } = useStyles();
  const { activeId } = useHeadsObserver();

  return (
    <Box sx={{ display: 'block', bgcolor: 'grey[100]', position: 'sticky', top: 0, padding: 3 }}>
      <Typography component="p" variant="h4" gutterBottom>
        Table of Contents
      </Typography>
      <nav>
        <Box component="ul" sx={{ listStyleType: 'none', padding: '0px' }}>
          {toc.map((item) => (
            <Box component="li" key={item._key} sx={{ mb: 1, fontSize: 'body2.fontSize' }}>
              <Link
                className={`${item.hashID === activeId ? classes.activeLink : null}`}
                href={`#${item.hashId}`}
                underline="hover"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${item.hashID}`).scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {item.title}
              </Link>
            </Box>
          ))}
        </Box>
      </nav>
    </Box>
  );
}

export default TableOfContent;
