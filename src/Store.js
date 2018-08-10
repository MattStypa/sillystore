import React from 'react';
import Context from './Context.js';

const setStore = (...args) => setState(...args);
let setState = () => {};

class Store extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {...props.initial};
    setState = (...args) => this.setState(...args);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {React.Children.only(this.props.children)}
      </Context.Provider>
    );
  }
}

export default Store;
export { setStore };
