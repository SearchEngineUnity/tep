/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import MainNav from '../components/navs/headerElements/MainNav';
import MainFooter from '../components/navs/footerElements/MainFooter';

function MyLayout({ data, children, location }) {
  return (
    <>
      {data.mainNav && <MainNav location={location} />}
      {children}
      {data.footer && <MainFooter />}
    </>
  );
}

export default function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          footer: sanityNavMenu(type: { eq: "mainFooter" }) {
            type
          }
          mainNav: sanityNavMenu(type: { eq: "mainNav" }) {
            type
          }
        }
      `}
      render={(data) => <MyLayout data={data} {...props} />}
    />
  );
}
