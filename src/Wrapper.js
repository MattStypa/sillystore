import React from 'react';

import shallowEqual, { is } from './shallowEqual.js';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    let watched = this.props.watched;
    Array.isArray(watched) || (watched = [watched]);

    this.state = {
      props: {},
      watched,
    };
  }

  shouldComponentUpdate(nextProps) {
    if (!shallowEqual(this.props.inherit, nextProps.inherit)) {
      return true;
    }

    for (let i = 0; i < this.state.watched.length; i++) {
      if (!is(
        this.props.store[this.state.watched[i]],
        nextProps.store[this.state.watched[i]]
      )) {
        return true;
      }
    }

    return false;
  }

  static getDerivedStateFromProps(props, state) {
    let newProps = {};
    state.watched.forEach((key) => newProps[key] = props.store[key]);

    return {props: newProps};
  }

  render() {
    return (
      <this.props.component store={this.state.props} {...this.props.inherit}/>
    );
  }
}

export default Wrapper;
