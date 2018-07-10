import React from 'react';
import logo from '../images/logo.svg';
import { css } from 'glamor';
import glamorous from 'glamorous';

const style = () => {
  const spin = css.keyframes({
    from: { transform: `rotate(0deg)` },
    to: { transform: `rotate(360deg)` }
  });

  return { 
    height: '200px',
    animation: `${spin} 20s infinite linear`
  };
};

const Logo = glamorous.img(style);
  

export default (props) => {
    return <Logo src={logo} />;
}
