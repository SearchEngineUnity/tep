import React from 'react';
import { Button } from 'gatsby-theme-material-ui';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { determineColor } from '../../lib/helperFunctions';

function ConditionalButton({
  idTag,
  text,
  variant,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  fullWidth,
  borderRadius,
  padding,
  link,
  colors,
  alignment,
  typography,
  bgImage,
}) {
  const { main, dark, contrastText } = colors;
  const mainColor = determineColor(main?.color);
  const darkColor = determineColor(dark?.color);
  const contrastTextColor = determineColor(contrastText?.color);
  const hoverOverlay = dark.color.rgb;

  const theme = createTheme({
    palette: {
      primary: {
        main: mainColor,
        dark: darkColor,
        contrastText: contrastTextColor,
      },
    },
    shape: {
      borderRadius: borderRadius || '4px',
    },
    typography: {
      button: {
        fontFamily: typography?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.fontWeight || 500,
        fontSize: typography?.fontSize || '0.875rem',
        lineHeight: typography?.lineHeight || 1.75,
        letterSpacing: typography?.letterSpacing || '0.02857em',
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundImage: bgImage && `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            '&:hover': {
              backgroundImage:
                bgImage &&
                `linear-gradient(rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50), rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50)), url(${bgImage})`,
            },
            '@media (hover: none)': {
              backgroundImage: bgImage && `url(${bgImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              '&:hover': {
                backgroundImage:
                  bgImage &&
                  `linear-gradient(rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50), rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50)), url(${bgImage})`,
              },
            },
          },
        },
      },
    },
  });

  let linkType = link[0]._type;
  let { href } = link[0];
  const { hashId = '', newTab = false, noreferrer = false } = link[0];
  const noopenerTag = newTab ? 'noopener' : '';
  const nofollowTag = linkType === 'affiliateLink' ? 'nofollow' : '';
  const noreferrerTag = noreferrer ? 'noreferrer' : '';

  const target = newTab || linkType === 'affiliateLink' ? '_blank' : undefined;
  const rel = `${nofollowTag} ${noopenerTag} ${noreferrerTag}`.trim();

  if (linkType === 'jumpLink') {
    href = `#${hashId}`;
  }

  if (linkType === 'internalLocal' && newTab) {
    linkType = 'internalGlobal';
  }
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: alignment }}>
        <Button
          id={idTag}
          color="primary"
          variant={variant}
          disableElevation={disableElevation}
          disableFocusRipple={disableFocusRipple}
          disableRipple={disableRipple}
          fullWidth={fullWidth}
          target={target}
          rel={rel || undefined}
          to={linkType === 'internalLocal' ? href : undefined}
          href={linkType !== 'internalLocal' ? href : undefined}
          sx={{
            padding,
            textAlign: 'center',
          }}
        >
          {text}
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default ConditionalButton;
