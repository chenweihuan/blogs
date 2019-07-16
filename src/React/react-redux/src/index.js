import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from "axios";

import store from './store.js';
import { addToCart, updateCart, deleteFromCart,getList } from './actions/cart-actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    let unsubscribe = store.subscribe(() =>
      console.log(store.getState())
    );
    axios.get("https://easy-mock.com/mock/5ca4644313e4cf68f04a42da/example/redux").then(res => {
      store.dispatch(getList(res.data.data.list));
    }).then(()=>{
      store.dispatch(addToCart('Coffee 500gm', 1, 250));
      store.dispatch(addToCart('Flour 1kg', 2, 110));
      store.dispatch(addToCart('Juice 2L', 1, 250));
      store.dispatch(updateCart('Flour 1kg', 5, 110));
      store.dispatch(deleteFromCart('Coffee 500gm'));
      unsubscribe();
    })

  }
  render() {
    return (<h1>Redux Shopping Cart</h1>);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);