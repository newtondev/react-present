import React from 'react';

const lintPropsSrc = require('../../images/lintProps.png');
const escalateWarningsSrc = require('../../images/escalateWarnings.png');

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Be strict with your props</h1>

        <p>Lint your props</p>
        <img src={ lintPropsSrc } />

        <p>Escalate warnings in your specs and dev environment</p>
        <img src={ escalateWarningsSrc } />
      </div>
    );
  }
});
