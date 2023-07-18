import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Components';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



// import store from './store';
// import { decrement, increment, RNDDecrement, RNDIncrement } from './Store/actions/action';
// const { dispatch, getState, subscribe } = store;
// const countEl = document.getElementById('count');
// const INCEl = document.getElementById('INC');
// const DECEl = document.getElementById('DEC');
// const RNDInEl = document.getElementById('RNDIncrement')
// const RNDDecEl = document.getElementById('RNDDecrement')

// const state = getState();
// console.log(state);

// subscribe(() => {
//   const { count } = getState()
//   countEl.innerText = count
// })

// const onIncrement = () => dispatch(increment())
// const onDecrement = () => dispatch(decrement())

// const onRNDInc = ()=> dispatch(RNDIncrement())

// const onRNDDec = ()=> dispatch(RNDDecrement(54))

// DECEl.addEventListener('click',  onIncrement);
// INCEl.addEventListener('click',  onDecrement);

// RNDInEl.addEventListener('click', onRNDInc)
// RNDDecEl.addEventListener('click', onRNDDec)
