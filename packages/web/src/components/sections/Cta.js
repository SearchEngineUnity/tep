import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from 'gatsby-theme-material-ui';

function Cta() {
  const btnTheme = (theme) =>
    createTheme({
      // palette: {
      //   background: {
      //     default: '#FFFFFF',
      //     paper: '#FFFFFF',
      //   },
      //   primary: {
      //     main: theme.palette.primary.main,
      //     contrastText: '#FFFFFF',
      //   },
      // },
      shape: {
        borderRadius: '4px',
      },
      typography: {
        button: {
          fontFamily: theme.typography.fontFamily,
          fontWeight: 900,
          fontSize: '20px',
          lineHeight: '1.2',
          textTransform: 'none',
        },
      },
    });

  return (
    <Box
      sx={[
        (theme) => ({
          padding: {
            lg: theme.customSpacing.sectionOuter.padding.desktop,
            md: theme.customSpacing.sectionOuter.padding.tablet,
            sm: theme.customSpacing.sectionOuter.padding.tabletMobile,
            xs: theme.customSpacing.sectionOuter.padding.mobile,
          },
        }),
      ]}
    >
      <Container
        maxWidth="lg"
        sx={[
          (theme) => ({
            padding: {
              lg: theme.customSpacing.sectionInner.padding.desktop,
              md: theme.customSpacing.sectionInner.padding.tablet,
              sm: theme.customSpacing.sectionInner.padding.tabletMobile,
              xs: theme.customSpacing.sectionInner.padding.mobile,
            },
          }),
        ]}
      >
        <Box
          sx={{
            padding: '1.5rem',
            color: 'common.white',
            backgroundColor: 'primary.main',
            borderRadius: '8px',
          }}
        >
          <Typography
            paragraph
            sx={{
              fontSize: '24px',
              fontWeight: 'regular',
              lineHeight: '1.2083',
              textAlign: 'center',
            }}
          >
            CONTACT US TODAY FOR A FREE EPOXY QUOTE
          </Typography>
          <Typography
            paragraph
            sx={{ fontSize: '24px', fontWeight: '900', lineHeight: '1.2083', textAlign: 'center' }}
          >
            Call us at 647-580-9479
          </Typography>
          <ThemeProvider theme={(theme) => btnTheme(theme)}>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                to="/contact-us"
                variant="outlined"
                sx={{ backgroundColor: 'white', padding: '12px 24px', textAlign: 'center' }}
              >
                Request a quote
              </Button>
            </Box>
          </ThemeProvider>
        </Box>
      </Container>
    </Box>
  );
}

export default Cta;
