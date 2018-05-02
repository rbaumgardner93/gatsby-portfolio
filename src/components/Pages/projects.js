// @ts-nocheck
import React from 'react';
import Link from 'gatsby-link';
import glamorous, { ThemeProvider } from 'glamorous';
import { css, before } from 'glamor';

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
  paddingRight: '4rem',
  marginTop: '-5rem',
  paddingTop: '2rem',

  '@media(max-width: 75em)': {
    marginTop: '-8rem',
    padding: 0,
  },

  '@media(max-width: 56.25em)': {
    marginBottom: '1rem',
  },
});

const HeaderDiv = glamorous.div({
  display: 'block',
  marginBottom: '2rem',
  width: '100%',
  transform: 'skewY(7deg)',
  position: 'relative',
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
    fontSize: '1.7rem',
    marginTop: 0,
  },
});

const Row = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  boxSizing: 'inherit',

  transform: 'skewY(7deg)',
  opacity: 0.9,
  height: '60%',
  width: '100%',

  '@media(max-width: 75em)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    marginTop: '-1rem',
  },
});

const Column = glamorous.div({
  position: 'relative',
  margin: '0 1rem',
  height: '100%',
  width: '25%',
  display: 'flex',
  flexDirection: 'row',

  '@media(max-width: 75em)': {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
});

const Card = glamorous.div({
  position: 'relative',
  display: 'flex',
  backgroundColor: '#212121',
  borderRadius: '3px',
  boxShadow: '0 1rem 2.5rem rgba(0, 0, 0, 0.15)',
  transition: 'transform .3s',
  height: '90%',
  width: '100%',
  '&:last-child': {
    marginRight: 0,
  },
  '&:hover': {
    transform: 'translateY(-1.5rem) scale(1.03)',
  },
});

const Iframe = glamorous.iframe({
  height: '100%',
  width: '100%',
  border: 'none',
  margin: 0,
  padding: 0,
});

const ComingSoon = glamorous.div({
  height: '100%',
  width: '100%',
  position: 'absolute',
  margin: 0,
  padding: 0,
});

const P = glamorous.p({
  position: 'relative',
  fontSize: '2rem',
  textAlign: 'center',
  top: '20%',
  color: '#faf9f9',
  transform: 'skewY(-7deg)',
});

const LinkRow = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-end',
  alignItems: 'center',
  position: 'absolute',
  height: 'auto',
  width: '100%',

  '@media(max-width: 75em)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
});

const SiteLink = glamorous.a({
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
});

const ProjectPage = () => (
  <Container id="projects">
    <HeaderDiv>
      <ProjectTitle>Projects</ProjectTitle>
    </HeaderDiv>
    <Row>
      <Column>
        <Card>
          <Iframe src="https://rbaumgardner93.github.io/travel-agency-site/" />
        </Card>
        <LinkRow>
          <SiteLink
            href="https://rbaumgardner93.github.io/travel-agency-site/"
            target="
            _blank"
          >
            Visit Site &rarr;
          </SiteLink>
        </LinkRow>
      </Column>
      <Column>
        <Card>
          <Iframe src="https://rbaumgardner93.github.io/nexter-project/" />
        </Card>
        <LinkRow>
          <SiteLink
            href="https://rbaumgardner93.github.io/nexter-project/"
            target="
            _blank"
          >
            Visit Site &rarr;
          </SiteLink>
        </LinkRow>
      </Column>
      <Column>
        <Card>
          <ComingSoon>
            <P>Coming Soon!</P>
          </ComingSoon>
        </Card>
      </Column>
      <Column>
        <Card>
          <ComingSoon>
            <P>Coming Soon!</P>
          </ComingSoon>
        </Card>
      </Column>
    </Row>
  </Container>
);

export default ProjectPage;
