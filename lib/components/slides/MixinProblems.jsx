import React from 'react';

const wtfSrc = require('../../images/wtf.jpg');

export default React.createClass({
  render() {
    return (
      <div>
        <img src={ wtfSrc } />

        <br />
        <br />

        <ul>
          <li>Mixins don't work with ES6 classes</li>
          <li>What if you need <code>shouldComponentUpdate</code>?</li>
          <li><code>this.setState()</code> outside of component can be confusing.</li>
        </ul>
      </div>
    );
  }
});
