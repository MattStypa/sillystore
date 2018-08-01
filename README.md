# SillyStore

This is just silly.

Seriously. Don't even look at this silly React store.

- No actions.
- No reducers.
- No mapping of props.

Connected components have two new props.
- `store`: global state object.
- `setStore`: global state setter; like `setState`.

```js
import { Provider } from 'sillystore';

const initialStore {
  count: 0,
};

ReactDOM.render(
  <Provider store={initialStore}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
```

```js
import { connect } from 'sillystore';

class Count extends React.Component {
  increment = () => this.props.setStore({clickCount: this.props.count + 1})

  render() {
    return (
      <div>
        <h1>Count: {this.props.store.count}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default connect(Count, ['count']);
```

## `connect(component, storeKeys);`
- `component` - React component.
- `storeKeys` - Array of store keys the component uses.
