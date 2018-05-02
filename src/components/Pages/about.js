import React from 'react';
import Link from 'gatsby-link';
import glamorous from 'glamorous';
import { css, before } from 'glamor';

//@ts-ignore
import AboutPic from '../../images/ryan.jpg';

const Container = glamorous.section({
  maxWidth: '100vw',
  padding: '15rem 0 15rem 0',
  marginTop: '-8rem',
  backgroundColor: '#212121',
  display: 'flex',

  '@media only screen and (min-width: 150em)': {
    lineHeight: 2,
  },

  '@media only screen and (max-width: 112.5em)': {
    marginBottom: '-2rem',
  },

  '@media only screen and (max-width: 75em)': {
    marginTop: '-8rem',
  },
});

const AboutTitleContainer = glamorous.div({
  display: 'block',
  color: '#fff',
  margin: '3rem',
});

const AboutTitle = glamorous.h2({
  fontSize: '2.5rem',
  color: '#faf9f9',
  borderBottom: 'none',
  fontWeight: 300,
  textAlign: 'center',
  letterSpacing: '1px',
  padding: '1rem 1.875rem',

  '@media only screen and (min-width: 150em)': {
    fontSize: '3.5rem',
  },

  '@media only screen and (max-width: 112.5em)': {
    fontSize: '3rem',
    paddingTop: '2rem',
  },

  '@media only screen and (max-width: 75em)': {
    fontSize: '2.5rem',
  },

  '@media only screen and (max-width: 56.25em)': {
    fontSize: '1.7rem',
  },
});

const ContentContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '50%',

  '@media(max-width: 62.5em)': {
    flexDirection: 'column',
  },
});

const ParagraphDiv = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'flex-start',
  height: '75%',
  width: '100%',
  fontSize: '1.4rem',

  '@media(max-width: 75em)': {
    paddingTop: '1.5rem',
  },
});

const P = glamorous.p({
  display: 'flex',
  padding: '0 2rem',
  maxWidth: '1200px',
  color: '#faf9f9',
  textAlign: 'justify',

  '@media only screen and (min-width: 150em)': {
    fontSize: '2rem',
  },

  '@media only screen and(max-width: 112.5em)': {
    fontSize: '1.5rem',
  },

  '@media only screen and (max-width: 75em)': {
    fontSize: '1.2rem',
  },

  '@media only screen and (max-width: 56.25em)': {
    fontSize: '1.1rem',
  },

  '@media only screen and (max-width: 37.25em)': {
    fontSize: '1rem',
  },
});

const Div = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '1rem',
  width: '100%',
});

const A = glamorous.a({
  display: 'flex',
  alignSelf: 'center',
  cursor: 'pointer',
  color: '#3f51b5',
  borderBottom: '1px solid #3f51b5',
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: '#3f51b5',
    color: '#faf9f9',
    transform: 'scale(1.05)',
    borderBottom: 'none',
  },

  '@media only screen and (min-width: 150em)': {
    fontSize: '1.8rem',
  },

  '@media only screen and (max-width: 112.5em)': {
    fontSize: '1.4rem',
  },

  '@media only screen and (max-width: 75em)': {
    fontSize: '1.2rem',
  },

  '@media only screen and (max-width: 56.25em)': {
    fontSize: '1.1rem',
  },

  '@media only screen and (max-width: 37.25em)': {
    fontSize: '1rem',
  },
});

const PhotoDiv = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  paddingBottom: '2rem',

  '@media only screen and (min-width: 150em)': {
    paddingLeft: '4rem',
  },
});

const Photo = glamorous.img({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '5px',
  width: '50%',
  height: '90%',
  paddingTop: '1.5rem',
  position: 'relative',

  '@media only screen and (min-width: 150em)': {
    width: '50%',
    height: '100%',
    paddingBottom: '2rem',
    paddingLeft: '4rem',
  },

  '@media only screen and (max-width: 112.5em)': {
    width: '55%',
    height: '75%',
  },

  '@media only screen and (max-width: 75em)': {
    width: '50%',
    height: '75%',
  },

  '@media only screen and (max-width: 62.5em)': {
    width: '35%',
    height: '75%',
  },

  '@media only screen and (max-width: 56.25em)': {
    width: '35%',
  },
});

const AboutPage = () => (
  <Container id="about">
    <AboutTitleContainer>
      <AboutTitle>About</AboutTitle>
    </AboutTitleContainer>
    <ContentContainer>
      <ParagraphDiv>
        <P>
          Hi, I’m Ryan A. Baumgardner.<br />
        </P>
        <P>
          I'm a Front-End Web Developer, with experience in back-end
          technologies, such as node. I have a bachelor's degree in Agriculture
          from the University of Kentucky. I recently transitioned from the wine
          distribution world to web development.
        </P>
        <P>
          Nothing makes me happier than having a vision for a project and
          working through the build process to create something out of nothing.
          With the ability to see the big picture while also making sure every
          detail is in order is why I believe I can help with a project or be an
          asset to your team.
        </P>
        <P>
          When I am not working on projects I enjoy spending time outdoors,
          going to coffee shops, and finding new wineries with my wife Megan.
        </P>
        <P>
          Nice to meet you! Please get in touch if you would like to work on a
          project, or just talk!
        </P>
        <Div>
          <A
            href="https://www.linkedin.com/in/ryan-baumgardner-10046b159/"
            target="_blank"
          >
            Learn more &rarr;
          </A>
        </Div>
      </ParagraphDiv>
      <PhotoDiv>
        <Photo src={AboutPic} alt="Picture of Ryan" />
      </PhotoDiv>
    </ContentContainer>
  </Container>
);

export default AboutPage;
