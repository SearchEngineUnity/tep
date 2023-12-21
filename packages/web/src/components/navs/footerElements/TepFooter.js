/* remove this eslint-disable when all links are added */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'gatsby-theme-material-ui';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { styled } from '@mui/material/styles';
import facebook from './facebook.png';
import twitter from './twitter.png';
import homeStars from './homestars.png';
import linkedIn from './linkedin.png';

const MenuHeading = styled(Box)(({ theme }) => ({
  fontWeight: 800,
  lineHeight: 1.1,
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  padding: '10px 0',
}));

const MenuText = styled(Box)({
  textDecoration: 'none',
  fontWeight: 500,
  display: 'flex',
  // alignItems: 'center',
  lineHeight: 1.4,
  margin: '0 0 16px 0',
});

const MenuItem = styled('li')({
  marginBottom: '8px',
});

const MenuLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontWeight: 500,
  lineHeight: 'normal',
  color: '#f1f1f1',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

function TepFooter() {
  return (
    <Box component="footer">
      <Box
        sx={{
          backgroundColor: '#1e1e1e',
          fontFamily: 'Inter, Arial, sans-serif',
          color: '#f1f1f1',
          paddingY: '24px',
          fontSize: '16px',
          fontWeight: 300,
          textDecoration: 'none',
        }}
      >
        <Container
          maxWidth="lg"
          component="nav"
          role="menubar"
          style={{ paddingLeft: '16px', paddingRight: '16px' }}
        >
          <Grid container spacing={2}>
            <Grid xs={12} md={6} lg={6}>
              <MenuHeading component="p">CONTACT INFO</MenuHeading>
              <Box component="ul" sx={{ listStyleType: 'none', paddingLeft: 0 }}>
                <MenuItem>
                  <MenuText component="p">
                    <LocationOnIcon color="primary" sx={{ mr: '8px' }} />
                    1202 - 2111 Lakeshore West, Toronto, ON, M8V4B2
                  </MenuText>
                </MenuItem>
                <MenuItem>
                  <MenuText component="p">
                    <PhoneIcon color="primary" sx={{ mr: '8px' }} />
                    <MenuLink href="tel:647-580-9479">647-580-9479</MenuLink>
                  </MenuText>
                </MenuItem>
                <MenuItem>
                  <MenuText component="p">
                    <MailOutlineIcon color="primary" sx={{ mr: '8px' }} />
                    <MenuLink href="mailto:info@thecitypainters.com">
                      contact@torontoepoxy.com
                    </MenuLink>
                  </MenuText>
                </MenuItem>
              </Box>
              <br />
              <Grid container spacing={3}>
                <Grid>
                  <a
                    href="https://www.facebook.com/TorontoEpoxy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="facebook" width="48" height="48" loading="lazy" />
                  </a>
                </Grid>
                <Grid>
                  <a
                    href="https://www.twitter.com/TorontoEpoxy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="twitter" width="48" height="48" loading="lazy" />
                  </a>
                </Grid>
                <Grid>
                  <a
                    href="https://www.linkedin.com/company/the-city-painters"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedIn} alt="linkedin" width="48" height="48" loading="lazy" />
                  </a>
                </Grid>
                <Grid>
                  <a
                    href="https://homestars.com/companies/2795419-the-city-painters?service_area=1857483"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={homeStars} alt="homestars" width="48" height="48" loading="lazy" />
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} sm={6} md={3} lg={3}>
              <MenuHeading component="p">INDUSTRIES</MenuHeading>
              <Box component="ul" sx={{ listStyleType: 'none', paddingLeft: 0 }}>
                <MenuItem>
                  <MenuLink to="/solutions/industrial-epoxy-flooring">
                    Industrial Buildings
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/solutions/institutional-building-epoxy-floor">
                    Institutional Buildings
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/solutions/retail-epoxy-flooring">Retail & Showroom</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/solutions/epoxy-flooring-residential-complex">
                    Residential Complex
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/solutions/hotel-epoxy-flooring">Hotel & Hospitality</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/solutions/epoxy-commercial-kitchen-restaurant-floor">
                    Kitchen & Restaurant
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/solutions/epoxy-aircraft-hangar">Airports & Hangars</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/solutions/epoxy-parking-floor">Parking Garages</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/solutions/epoxy-smart-centres">Smart Centers</MenuLink>
                </MenuItem>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3} lg={3}>
              <MenuHeading component="p">FLOORING SERVICES</MenuHeading>
              <Box component="ul" sx={{ listStyleType: 'none', paddingLeft: 0 }}>
                <MenuItem>
                  <MenuLink to="/services/epoxy-floor-installation">
                    Epoxy Floor Installation
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/services/epoxy-floor-repair">Epoxy Floor Repair</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/services/polished-concrete">Polished Concrete</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/services/concrete-repair">Concrete Repair & Restoration</MenuLink>
                </MenuItem>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: 'common.black',
          textAlign: 'left',
          fontSize: '13px',
          fontWeight: 300,
          color: '#848484',
          lineHeight: 0,
          padding: '20px 0',
          borderBottom: (theme) => `2px solid ${theme.palette.primary.main}`,
        }}
      >
        <Container
          maxWidth="lg"
          component="nav"
          role="menubar"
          style={{ paddingLeft: '16px', paddingRight: '16px' }}
        >
          <p>
            <Link
              to="/privacy-policy"
              target="_blank"
              rel="noopener"
              sx={{
                textDecoration: 'none',
                fontWeight: 300,
                fontSize: '13px',
                color: '#f1f1f1',
                '&:hover, &:focus, &:active': {
                  textDecoration: 'underline',
                },
              }}
            >
              Privacy Policy
            </Link>
            &nbsp; - Copyright {new Date().getFullYear()} Toronto Epoxy Pros
          </p>
        </Container>
      </Box>
    </Box>
  );
}
export default TepFooter;
