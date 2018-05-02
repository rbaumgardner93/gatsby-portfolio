// @ts-nocheck
import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import glamorous from 'glamorous';
import { css, before } from 'glamor';

const HeaderContainer = glamorous.div({});

const TextBox = glamorous.div({
  position: 'absolute',
  top: '45%',
  left: '35%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',

  '@media only screen and (max-width: 112.5em)': {
    left: '40%',
  },

  '@media only screen and (max-width: 56.25em)': {
    left: '40%',
  },

  '@media only screen and (max-width: 46.875em)': {
    left: '50%',
  },
});

const MainHeading = glamorous.h1({
  fontSize: '4rem',
  fontWeight: 300,
  color: '#faf9f9',
  backfaceVisibility: 'hidden',
  marginBottom: '.7rem',
  border: 'none',

  '@media(min-width: 150em)': {
    fontSize: '4.5rem',
  },

  '@media(max-width: 112.5em)': {
    fontSize: '4rem',
  },

  '@media(max-width: 75em)': {
    fontSize: '3.15rem',
  },

  '@media(max-width: 56.25em)': {
    fontSize: '3rem',
    width: '100vw',
  },

  '@media(max-width: 37.5em)': {
    fontSize: '2rem',
    width: '100vw',
  },
});

const MainTag = glamorous.p({
  color: '#faf9f9',
  fontWeight: 300,
  fontSize: '1.8rem',

  '@media(min-width: 150em)': {
    fontSize: '2rem',
  },

  '@media(max-width: 112.5em)': {
    fontSize: '1.5rem',
  },

  '@media(max-width: 75em)': {
    fontSize: '1.1rem',
  },

  '@media(max-width: 56.25em)': {
    fontSize: '1rem',
  },
});

const Header = props => (
  <HeaderContainer>
    <TextBox>
      <MainHeading>Hi I'm Ryan Baumgardner</MainHeading>
      <MainTag>
        I'm a front-end developer who builds responsive, modern websites.
      </MainTag>
    </TextBox>
  </HeaderContainer>
);

export default Header;
