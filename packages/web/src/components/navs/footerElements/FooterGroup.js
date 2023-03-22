import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'gatsby-theme-material-ui';

function FooterGroup({ title, subGroup }) {
  return (
    <Box my={2}>
      <Box fontSize={14} fontWeight="fontWeightBold">
        {title}
      </Box>
      <List>
        {subGroup.map(({ title: itemTitle, nav, _key }) => (
          <ListItem key={_key}>
            <Link to={`/${nav.slug.current}`} color="inherit">
              {itemTitle}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
export default FooterGroup;
