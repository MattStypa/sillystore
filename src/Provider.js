import React from 'react';
import Context from './Context.js';

class Provider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {...props.store};
  }

  getContextValue = () => ({
    store: this.state,
    setStore: (...args) => this.setState(...args),
  });

  render() {
    return (
      <Context.Provider value={this.getContextValue()}>
        {React.Children.only(this.props.children)}
      </Context.Provider>
    );
  }
}

export default Provider;
