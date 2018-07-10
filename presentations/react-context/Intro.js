import React from 'react';
import ReactSpinningLogo from './components/ReactSpinningLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

export default class IntroSlide extends React.Component {
  render() {
    return (
      <div>
        <ReactSpinningLogo />
        <h1>Demystifying React Context</h1>
        <h2>Craig Newton</h2>
        <h5>
          <span>
            <FontAwesomeIcon
              icon={faTwitter}
            /> @craignewtondev
          </span>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
          <span>
            <FontAwesomeIcon
              icon={faGithub}
            /> newtondev
          </span>
        </h5>        
      </div>
    );
  }
}
