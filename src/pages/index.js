//@ts-nocheck
import React from 'react';
import Images from 'gatsby-image';
import Header from '../components/header';
import About from '../components/Pages/about';
import Projects from '../components/Pages/projects';
import Contact from '../components/Pages/contact';

const IndexPage = ({ data }) => (
  <div>
    <Image
      alt="Cup of coffee and pencil"
      sizes={data.headerImage.sizes}
      style={{
        height: '95vh',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        position: 'relative',
        clipPath: 'polygon(0 0, 100% 0, 100% 75vh, 0 100%)',
        marginBottom: '-12rem',
      }}
    />
    <Header />
    <About />
    <div>
      <Projects />
      <Image
        alt="Now brewing sign"
        sizes={data.projectImage.sizes}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'skewY(-7deg)',
          marginTop: '-8rem',
          marginBottom: '-25rem',
          height: '100vh',
          position: 'relative',
          zIndex: 2,
        }}
      />
    </div>
    <div>
      <Contact />
    </div>
  </div>
);

export default IndexPage;

export const imageQuery = graphql`
  query IndexQuery {
    headerImage: imageSharp(id: { regex: "./hero.jpg/" }) {
      sizes(
        duotone: { highlight: "#303f9f", shadow: "#192550", opacity: 60 }
        maxWidth: 1240
      ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    projectImage: imageSharp(id: { regex: "./project-header.jpg/" }) {
      sizes(
        duotone: { highlight: "#303f9f", shadow: "#192550", opacity: 60 }
        maxWidth: 1240
      ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
{
  /* <Image
        sizes={data.headerImage.sizes}
        style={{
          position: 'fixed',
          opacity: 0.7,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: '25vh',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: -1,
          clipPath: 'polygon(0 0, 100% 0, 100% 75vh, 0 100%)',
        }}
      /> */
}
