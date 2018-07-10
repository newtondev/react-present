import React from 'react';

import Intro from './Intro';

import Outro from './Outro';

const slideComponents = [
  Intro,

  Outro
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
