import React from 'react';
import Context from './Context';

export default (Component) => (props) => (
  <Context.Consumer>
    {state => <Component {...props} {...state}/>}
  </Context.Consumer>
);
