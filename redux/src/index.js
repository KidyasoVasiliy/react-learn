import { createStore } from 'redux';
// actions types
const PLUS = 'PLUS'
const MINUS = 'MINUS'
const REFRESH = 'REFRESH'

// action creators
const plus = () => ({ type: PLUS });
const minus = () => ({ type: MINUS });
const refresh = () => ({ type: REFRESH });

// initial state
const initialState = {
  count: 23
};
// store
const store = createStore(reducer);

// reducer
function reducer(state = initialState, action) {
  const { type } = action;

  switch(type) {
  case 'PLUS':
    return {...state, count: state.count + 1}
  case 'MINUS':
    return {...state, count: state.count - 1}
  case 'REFRESH':
    return {...state, count: 0 }
  default:
    return state;
  }
}

// subscribe

const btnPlus = document.querySelector('[data-action="plus"]');
const btnMinus = document.querySelector('[data-action="minus"]');
const btnRefresh = document.querySelector('[data-action="refresh"]');
const counterBox = document.querySelector('.box');

btnPlus.onclick = () => console.log('dispatch plus') || store.dispatch(plus());
btnMinus.onclick = () => console.log('dispatch minus') || store.dispatch(minus());
btnRefresh.onclick = () => console.log('dispatch refresh') || store.dispatch(refresh());

const update = () => {
  counterBox.children[0].textContent = store.getState().count;
  counterBox.style.transform = `scale(1.${store.getState().count})`;
}

const sub = store.subscribe(update);
