import React from 'react';
import Context from './Context.js';
import Wrapper from './Wrapper.js'

export default (component, watched) => (props) => (
  <Context.Consumer>
    {context => (
      <Wrapper component={component} inherit={props} store={context} watched={watched}/>
    )}
  </Context.Consumer>
);
