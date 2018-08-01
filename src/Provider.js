import React from 'react';
import Context from './Context.js';

const setStore = (...args) => setState(...args);
let setState = () => {};

class Provider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {...props.store};
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

export default Provider;
export { setStore };
