// @ts-nocheck
import React from 'react';
import Link from 'gatsby-link';
import glamorous from 'glamorous';
import { css } from 'glamor';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../images/logo.png';

const HeaderContainer = glamorous.header({
  position: 'absolute',
  background: 'transparent',
  top: 0,
  height: '13rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  zIndex: 10,
  padding: '2rem',

  '@media(max-width: 46.875em)': {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    alignItems: 'center',
  },
});

const Logo = glamorous.img({
  position: 'fixed',
  cursor: 'pointer',
  zIndex: 10,
  display: 'block',
  height: '8rem',
  width: '8rem',
  marginTop: '1rem',
  marginLeft: '1rem',
  transition: 'all .3s',
  ':hover': {
    transform: 'scale(1.1)',
  },

  '@media(min-width: 150em)': {
    height: '16rem',
    width: '16rem',
  },

  '@media(max-width: 112.5em)': {
    height: '12rem',
    width: '12rem',
  },

  '@media(max-width: 75em)': {
    height: '10rem',
    width: '10rem',
  },

  '@media(max-width: 46.875em)': {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    margin: '1rem 0 0 0',
  },
});

const NavLinks = glamorous.nav({
  display: 'flex',
  right: 0,
  paddingRight: '2rem',
  position: 'absolute',

  '@media(min-width: 150em)': {
    fontSize: '2rem',
  },

  '@media(max-width: 112.5em)': {
    fontSize: '1.2rem',
  },

  '@media(max-width: 75em)': {
    fontSize: '1.2rem',
  },

  '@media(max-width: 56.25em)': {
    fontSize: '1.1rem',
  },

  '@media(max-width: 46.875em)': {
    fontSize: '.9rem',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    alignSelf: 'center',
    paddingRight: 0,
  },

  '@media(max-width: 37.25em)': {
    fontSize: '.9rem',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    alignSelf: 'center',
    paddingRight: 0,
  },
});

const Ul = glamorous.ul({
  listStyle: 'none',
  display: 'flex',
});

const Li = glamorous.li({
  fontWeight: 400,
  color: '#fff',
  margin: '3.5rem 2rem 0 2rem',
  textTransform: 'uppercase',
  letterSpacing: '5px',
  display: 'inline-block',
  cursor: 'pointer',

  '@media(max-width: 46.875em)': {
    fontWeight: 400,
    color: '#fff',
    margin: '2rem 1rem 0 1rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    display: 'inline-block',
    cursor: 'pointer',
  },
});

const Nav = () => (
  <HeaderContainer>
    <Link to="/">
      <Logo
        css={{
          position: 'absolute',
        }}
        src={logo}
        alt="Logo"
      />
    </Link>
    <NavLinks>
      <Ul>
        <Li>
          <AnchorLink
            css={{
              textDecoration: 'none',
              textDecoration: 'none',
              transition: 'all .3s ease',
              ':hover': {
                textDecoration: 'none',
                borderBottom: '3px solid #3f51b5',
                paddingBottom: '10px',
              },
            }}
            href="#about"
          >
            About
          </AnchorLink>
        </Li>
        <Li>
          <AnchorLink
            css={{
              textDecoration: 'none',
              transition: 'all .3s ease',
              ':hover': {
                textDecoration: 'none',
                borderBottom: '3px solid #3f51b5',
                paddingBottom: '10px',
              },
            }}
            href="#projects"
          >
            Projects
          </AnchorLink>
        </Li>
        <Li>
          <AnchorLink
            css={{
              textDecoration: 'none',
              textDecoration: 'none',
              transition: 'all .3s ease',
              ':hover': {
                textDecoration: 'none',
                borderBottom: '3px solid #3f51b5',
                paddingBottom: '10px',
              },
            }}
            href="#contact"
          >
            Contact
          </AnchorLink>
        </Li>
      </Ul>
    </NavLinks>
  </HeaderContainer>
);

export default Nav;
