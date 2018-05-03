//@ts-nocheck
import React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';
import glamorous, { ThemeProvider } from 'glamorous';
import { css, before } from 'glamor';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const FooterContainer = glamorous.footer({
  display: 'fixed',
  bottom: 0,
  left: 0,
  width: 'auto',
  height: '12rem',
  display: 'grid',
  backgroundColor: '#212121',
  marginLeft: '2rem',
  marginRight: '2rem',
  borderTop: '1px solid #f4f2f2',
  marginTop: '1rem',
  zIndex: 10,

  '@media(max-width: 75em)': {
    marginLeft: 0,
    marginRight: 0,
  },
});

const ConnectText = glamorous.span({
  color: '#faf9f9',
  fontSize: '1rem',
  paddingTop: '2rem',

  display: 'grid',
  gridTemplateColumns: '1fr max-content 1fr',
  gridColumnGap: '15px',
  alignItems: 'center',
  alignContent: 'center',
  '&::before': {
    content: `''`,
    height: '1px',
    width: '15rem',
    display: 'block',
    border: '1px solid #faf9f9',
    justifySelf: 'end',
  },
  '&::after': {
    content: `''`,
    height: '1px',
    width: '15rem',
    display: 'block',
    border: '1px solid #faf9f9',
  },

  '@media(max-width: 56.25em)': {
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    '&::before': {
      display: 'none',
    },
    '&::after': {
      display: 'none',
    },

    '@media only screen and (min-width: 75em)': {
      fontSize: '1.3rem',
    },

    '@media only screen and (min-width: 112.5em)': {
      fontSize: '1.5rem',
    },

    '@media only screen and (min-width: 150em)': {
      fontSize: '1.8rem',
    },
  },
});

const IconList = glamorous.li({
  marginBottom: '1rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, min-content)',
  gridColumnGap: '5rem',
  alignContent: 'center',
  justifyContent: 'center',
  transform: 'transition a .2s',

  '@media only screen and (max-width: 56.25em)': {
    gridColumnGap: '3rem',
  },
});

const Footer = () => (
  <FooterContainer>
    <ConnectText>Connect With Me</ConnectText>
    <IconList>
      <a
        href="https://www.facebook.com/r.baumgardner93"
        target="_blank"
        rel="nofollow"
        style={{
          display: 'grid',
          fontSize: '1.8rem',
          textDecoration: 'none',
        }}
      >
        <i
          className="fa fa-facebook-f"
          css={{
            cursor: 'pointer',
            ':hover': {
              color: '#3b5998',
              transform: 'scale(1.2)',
            },
          }}
        />
      </a>
      <a
        href="https://twitter.com/rbaumgardner93"
        target="_blank"
        rel="nofollow"
        style={{
          display: 'grid',
          fontSize: '1.8rem',
          textDecoration: 'none',
        }}
      >
        <i
          className="fa fa-twitter"
          css={{
            cursor: 'pointer',
            ':hover': {
              color: '#00aced',
              transform: 'scale(1.2)',
            },
          }}
        />
      </a>
      <a
        href="https://github.com/rbaumgardner93"
        target="_blank"
        rel="nofollow"
        style={{
          display: 'grid',
          fontSize: '1.8rem',
          textDecoration: 'none',
        }}
      >
        <i
          className="fa fa-github"
          css={{
            cursor: 'pointer',
            ':hover': {
              color: '#4183c4',
              transform: 'scale(1.2)',
            },
          }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ryan-baumgardner-10046b159/"
        target="_blank"
        rel="nofollow"
        style={{
          display: 'grid',
          fontSize: '1.8rem',
          textDecoration: 'none',
        }}
      >
        <i
          className="fa fa-linkedin"
          css={{
            cursor: 'pointer',
            ':hover': {
              color: '#4875B4',
              transform: 'scale(1.2)',
            },
          }}
        />
      </a>
    </IconList>
  </FooterContainer>
);

export default Footer;
