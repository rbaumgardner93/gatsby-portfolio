//@ts-nocheck
import React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import SendButton from '../components/SendButton';

const FormDiv = glamorous.div({
  width: '50%',
  height: '100%',
  padding: '4.5rem',
  display: 'block',

  '@media(max-width: 56.25em)': {
    padding: '4.5rem 1rem',
  },

  '@media(max-width: 46.875em)': {
    width: '100%',
  },
});

const Form = glamorous.form({
  display: 'block',
  height: '100%',
  width: '100%',
  margin: 0,
  paddingTop: '2.5rem',
});

const HeaderDiv = glamorous.div({
  display: 'block',
  marginBottom: '1.5rem',
  width: '100%',
});

const TextBox = glamorous.h2({
  fontSize: '2.5rem',
  textTransform: 'uppercase',
  display: 'inline-block',
  letterSpacing: '.3rem',
  height: '100%',
  width: '100%',
  color: '#faf9f9',
  margin: 0,
  padding: 0,
  border: 'none',
  textAlign: 'center',

  '@media(min-width: 150em)': {
    fontSize: '3.5rem',
  },

  '@media(max-width: 112.5em)': {
    fontSize: '3rem',
  },

  '@media(max-width: 93.75em)': {
    fontSize: '2.5rem',
  },

  '@media(max-width: 75em)': {
    fontSize: '2.5rem',
  },

  '@media(max-width: 56.25em)': {
    fontSize: '1.7rem',
  },
});

const InputDiv = glamorous.div({
  display: 'block',
});

const Input = glamorous.input({
  borderRadius: '3px',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  border: 'none',
  borderBottom: '3px solid transparent',
  width: '100%',
  transition: 'all .3s',
  padding: '.7rem 1.2rem',
  marginBottom: '1rem',
  ':focus': {
    outline: 'none',
    boxShadow: '0 1rem 2rem rgba(#212121, .1)',
    borderBottom: '3px solid #3f51b5',
  },
  ':focus:invalid': {
    borderBottom: '3px solid #a50904',
  },
});

const Description = glamorous.textarea({
  borderRadius: '3px',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  border: 'none',
  borderBottom: '3px solid transparent',
  width: '100%',
  transition: 'all .3s',
  padding: '.7rem .2rem 2.5rem .7rem',
  ':focus': {
    outline: 'none',
    boxShadow: '0 1rem 2rem rgba(#212121, .1)',
    border: '3px solid #3f51b5',
  },
});

const ContactForm = () => (
  <FormDiv>
    <Form method="post" action="#">
      <HeaderDiv>
        <TextBox>Contact</TextBox>
      </HeaderDiv>
      <InputDiv>
        <Input type="text" name="name" placeholder="Full Name" id="name" />
        <Input type="email" name="email" placeholder="Email" id="email" />
        <Description
          type="text"
          placeholder="Please enter a short project description..."
          id="description"
          name="message"
        />
        <SendButton type="submit" />
      </InputDiv>
    </Form>
  </FormDiv>
);

export default ContactForm;
