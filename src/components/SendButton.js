//@ts-nocheck
import React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';

const Button = glamorous.button({
  marginTop: '.5rem',
  borderRadius: '3px',
  backgroundColor: '#3f51b5',
  border: 'none',
  width: '100%',
  transition: 'all .3s',
  padding: '.7rem 1.2rem',
  cursor: 'pointer',
  color: '#faf9f9',
  transition: 'all .2s',
  '&:hover': {
    backgroundColor: '#303f9f',
    boxShadow: '0 1rem 2rem rgba(#000, 0.9))',
  },
  ':focus': {
    outline: 'none',
    transform: 'translateY(2px)',
    boxShadow: '0 .5rem 1rem rgba(#000, 0.2)',
    position: 'relative',
  },
});

const SendButton = () => <Button>Send &rarr;</Button>;

export default SendButton;
