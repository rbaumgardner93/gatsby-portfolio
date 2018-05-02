// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { css } from 'glamor';
import glamorous from 'glamorous';
import Image from 'gatsby-image';
import '../layouts/index.css';

import faviconApple from '../../public/static/favicons/apple-touch-icon.png';
import favicon32 from '../../public/static/favicons/favicon-32X32.png';
import favicon16 from '../../public/static/favicons/favicon-16X16.png';
import safariPinned from '../../public/static/favicons/safari-pinned-tab.svg';
import faviconICO from '../../public/static/favicons/favicon.ico';

import Nav from '../components/nav';
import Footer from '../components/footer';

const Layout = ({ children, data, props }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'msapplication-TileColor', content: '#000' },
        { name: 'theme-color', content: '#000' },
      ]}
    >
      <link rel="apple-touch-icon" sizes="180X180" href={faviconApple} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="mask-icon" href={safariPinned} />
      <link rel="shortcut icon" href={faviconICO} />
    </Helmet>
    <Nav />
    <main
      css={{
        padding: '2rem 2rem 0 2rem',
        maxWidth: 'auto',
        minHeight: '70vh',

        '@media(max-width: 75em)': {
          padding: 0,
        },
      }}
    >
      {children()}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const pageQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
