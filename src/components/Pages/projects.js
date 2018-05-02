// @ts-nocheck
import React from 'react';
import Link from 'gatsby-link';
import glamorous, { ThemeProvider } from 'glamorous';
import { css, before } from 'glamor';

import nexterLogo from '../../images/favicon.png';
import clearviewLogo from '../../images/clearview-logo.png';
// $grid-width: 114rem;
// $gutter-vertical: 8rem;
// $gutter-vertical-small: 6rem;
// $gutter-horizontal: 6rem;

const Container = glamorous.section({
  transform: 'skewY(-7deg)',
  position: 'absolute',
  height: '100vh',
  width: '100%',
  zIndex: 3,
  position: 'absolute',
  boxSizing: 'inherit',
  marginTop: '-5rem',
  padding: '6rem 8rem 6rem 4rem',
  display: 'block',

  '@media(max-width: 75em)': {
    padding: '6rem 4rem',
    marginTop: '-8rem',
  },

  '@media(max-width: 62.5em)': {
    padding: '6rem 4rem',
  },

  '@media(max-width: 56.25em)': {
    marginBottom: '1rem',
    padding: '1rem 2rem',
    alignItems: 'center',
  },

  '@media(max-width: 37.25em)': {
    padding: '0 .5rem',
  },

  '@media(max-width: 26em)': {
    padding: 0,
  },
});

const HeaderDiv = glamorous.div({
  display: 'block',
  marginBottom: '2rem',
  width: '100%',
  transform: 'skewY(7deg)',
  position: 'relative',

  '@media(max-width: 37.25em)': {
    marginBottom: 0,
  },

  '@media(max-width: 26em)': {
    marginBottom: 0,
  },
});

const ProjectTitle = glamorous.h2({
  fontSize: '2.5rem',
  textAlign: 'center',
  color: '#fff',
  borderBottom: 'none',
  fontWeight: 300,
  letterSpacing: '5px',

  '@media(min-width: 150em)': {
    fontSize: '3.5rem',
  },

  '@media(max-width: 112.5em)': {
    fontSize: '3rem',
    paddingTop: '2rem',
  },

  '@media(max-width: 93.75em)': {
    fontSize: '2.5rem',
    marginTop: 0,
  },

  '@media(max-width: 75em)': {
    fontSize: '2.5rem',
    marginTop: 0,
  },

  '@media(max-width: 56.25em)': {
    fontSize: '2rem',
    marginTop: 0,
  },

  '@media(max-width: 26em)': {
    fontSize: '1.4rem',
  },
});

const Row = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  boxSizing: 'inherit',
  justifyContent: 'space-between',
  height: '60%',
  width: '100%',

  transform: 'skewY(7deg)',
  opacity: 0.9,

  '@media(max-width: 56.25em)': {
    flexDirection: 'column',
    height: '85%',
  },
});

const Card = glamorous.div({
  position: 'relative',
  display: 'block',
  margin: '.5rem',
  padding: '2rem',
  textAlign: 'center',
  backgroundColor: '#212121',
  borderRadius: '3px',
  boxShadow: '0 1rem 2.5rem rgba(0, 0, 0, 0.15)',
  transition: 'transform .3s',
  height: '100%',
  width: '100%',
  ':hover': {
    transform: 'translateY(-1.5rem) scale(1.03)',
  },

  '@media(max-width: 62.5em)': {
    padding: '.8rem',
  },

  '@media(max-width: 56.25em)': {
    padding: '.1rem',
    width: '50%',
    height: '100%',
  },

  '@media(max-width: 37.5em)': {
    padding: '.2rem',
  },
});

const SiteLogo = glamorous.img({
  height: '60px',
  width: '60px',
  marginTop: '.2rem',

  '@media(max-width: 62.5em)': {
    height: '40px',
    width: '40px',
  },

  '@media(max-width: 26em)': {
    height: '35px',
    width: '35px',
    marginBottom: '.4rem',
  },

  '@media(max-width: 24em)': {
    height: '20px',
    width: '20px',
    marginBottom: '.4rem',
  },
});

const SiteName = glamorous.h3({
  fontWeight: 700,
  margin: 0,
  width: '100%',
  color: '#faf9f9',
  borderBottom: '1px solid #faf9f9',
  paddingBottom: '1rem',
  position: 'relative',

  '@media(max-width: 62.5em)': {
    fontSize: '1.1rem',
  },

  '@media(max-width: 56.25em)': {
    fontSize: '.9rem',
    paddingBottom: '.5rem',
  },

  '@media(max-width: 24em)': {
    fontSize: '.8rem',
    paddingBottom: '.1rem',
  },
});

const SiteDescription = glamorous.p({
  color: '#faf9f9',
  paddingTop: '1rem',
  textAlign: 'center',
  position: 'relative',

  '@media(max-width: 56.25em)': {
    fontSize: '.8rem',
    paddingTop: '.5rem',
    marginBottom: '.2rem',
  },

  '@media(max-width: 26em)': {
    fontSize: '.7rem',
    paddingBottom: '.8rem',
    marginBottom: '.4rem',
  },

  '@media(max-width: 24em)': {
    fontSize: '.6rem',
    paddingBottom: '.8rem',
    margin: '.1rem',
  },
});

const SiteLink = glamorous.a({
  textAlign: 'center',
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
  paddingBottom: 0,
  padding: '3px',
  borderBottom: '1px solid #fff',
  transition: 'all .2s ease',
  fontSize: '.9rem',
  '&:hover': {
    backgroundColor: '#3f51b5',
    textDecoration: 'none',
    borderBottom: 'none',
    transform: 'scale(1.1)',
  },

  '@media(min-width: 150em)': {
    fontSize: '2rem',
  },

  '@media(max-width: 112.5em)': {
    fontSize: '1.1rem',
  },

  '@media(max-width: 75em)': {
    fontSize: '1rem',
  },

  '@media(max-width: 56.25em)': {
    fontSize: '.8rem',
    paddingTop: 0,
  },

  '@media(max-width: 26em)': {
    fontSize: '.7rem',
  },
});

const P = glamorous.p({
  display: 'inline-block',
  position: 'relative',
  fontSize: '2rem',
  textAlign: 'center',
  top: '30%',
  color: '#faf9f9',
  transform: 'skewY(-7deg)',

  '@media(max-width: 56.25em)': {
    textAlign: 'center',
  },

  '@media(max-width: 37.5em)': {
    left: 0,
    top: '10%',
  },
});

const ProjectPage = () => (
  <Container id="projects">
    <HeaderDiv>
      <ProjectTitle>Projects</ProjectTitle>
    </HeaderDiv>
    <Row>
      <Card>
        <SiteLogo src={nexterLogo} />
        <SiteName>Nexter</SiteName>
        <SiteDescription>
          Built With: SASS, HTML5, and CSS Grid.
        </SiteDescription>
        <SiteLink
          href="https://rbaumgardner93.github.io/nexter-project/"
          target="_blank"
        >
          Visit Site &rarr;
        </SiteLink>
      </Card>
      <Card>
        <SiteLogo src={clearviewLogo} css={{ borderRadius: '50px' }} />
        <SiteName>Clear View Escapes</SiteName>
        <SiteDescription>
          Built With: PostCSS, HTML5, JavaScript, Webpack and Gulp.
        </SiteDescription>
        <SiteLink
          href="https://rbaumgardner93.github.io/travel-agency-site/"
          target="_blank"
        >
          Visit Site &rarr;
        </SiteLink>
      </Card>
      <Card>
        <P>Coming Soon!</P>
      </Card>
      <Card>
        <P>Coming Soon!</P>
      </Card>
    </Row>
  </Container>
);

export default ProjectPage;
