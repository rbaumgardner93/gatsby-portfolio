//@ts-nocheck
import React from 'react';
import Link from 'gatsby-link';
import glamorous from 'glamorous';
import { css } from 'glamor';
import ContactForm from '../contactForm';

import contactImage from '../../images/contact-image.jpg';

const ContactSection = glamorous.section({
  padding: '25rem 2rem 5rem 2rem',
  marginTop: '15rem',
  backgroundColor: '#212121',
  position: 'relative',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  '@media only screen and (max-width: 46.875em)': {
    padding: '15rem 2rem 5rem 2rem',
  },
});

const Image = glamorous.div({
  position: 'relative',
  backgroundImage: `linear-gradient(105deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 65%, transparent 50%), url(${contactImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'noRepeat',
  backgroundPosition: 'left',
  width: '100%',
  height: '40rem',
  borderRadius: '5px',
  zIndex: 1,

  display: 'flex',
  flexDirection: 'column',

  '@media screen only and (min-width: 150em)': {
    paddingBottom: '5rem',
  },

  '@media screen only and (max-width: 46.875em)': {
    backgroundImage: `linear-gradient(105deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%, transparent 50%), url(${contactImage})`,
    backgroundPosition: 'center',
  },
});

const ContactPage = () => (
  <ContactSection id="contact">
    <Image>
      <ContactForm />
    </Image>
  </ContactSection>
);

export default ContactPage;
