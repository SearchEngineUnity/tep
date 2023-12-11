import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link, Button } from 'gatsby-theme-material-ui';
import Typography from '@mui/material/Typography';

function NavItem({ url, title, isButton, location }) {
  if (isButton) {
    return (
      <Button
        variant="contained"
        color="primary"
        to={`/${url}`}
        role="menuitem"
        disableElevation
        disableFocusRipple
        disableRipple
        sx={{ px: 4, py: 2 }}
      >
        <Typography component="span" fontSize="20px" fontWeight={900} lineHeight="normal">
          {title}
        </Typography>
      </Button>
    );
  }

  console.log(location.pathname);
  return url === '/' ? (
    <>
      <Link
        to="/"
        role="menuitem"
        underline="none"
        sx={[
          { display: { xs: 'none', lg: 'block' } },
          {
            py: 1.5,
            fontSize: { xl: '24px', lg: '20px' },
            lineHeight: 'normal',
          },
          location.pathname === `/`
            ? {
                color: 'primary.main',
                fontWeight: 900,
                borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`,
              }
            : { color: 'common.black', fontWeight: 'fontWeightRegular', borderBottom: 'none' },
        ]}
      >
        {title}
      </Link>
      <Link
        to="/"
        role="menuitem"
        underline="none"
        sx={[
          { display: { xs: 'block', lg: 'none' } },
          {
            py: 1.5,
            fontSize: { xl: '24px', lg: '20px' },
            lineHeight: 'normal',
          },
          location.pathname === `/`
            ? {
                color: 'primary.main',
              }
            : { color: 'common.black' },
        ]}
      >
        <HomeIcon />
      </Link>
    </>
  ) : (
    <Link
      to={`/${url}`}
      role="menuitem"
      underline="none"
      sx={[
        {
          py: 1.5,
          fontSize: { xl: '24px', lg: '20px' },
          lineHeight: 'normal',
        },
        `/${url}` === location.pathname
          ? {
              color: 'primary.main',
              fontWeight: 900,
              borderBottom: (theme) => `3px solid ${theme.palette.primary.main}`,
            }
          : { color: 'common.black', fontWeight: 'fontWeightRegular', borderBottom: 'none' },
      ]}
    >
      {title}
    </Link>
  );
}

export default NavItem;
