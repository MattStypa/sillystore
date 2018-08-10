# SillyStore

This is just silly.

Seriously. Don't even look at this silly React store.

- No actions.
- No reducers.
- No mapping of props.

Connected components have a new prop.
- `store`: global state object.

```js
import { Store } from 'sillystore';

const initialStore {
  count: 0,
};

ReactDOM.render(
  <Store initial={initialStore}>
    <App/>
  </Store>,
  document.getElementById('root')
);
```

```js
import { connect, setStore } from 'sillystore';

class Count extends React.Component {
  increment = () => setStore({count: this.props.store.count + 1})

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
