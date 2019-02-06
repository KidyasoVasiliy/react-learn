const initialState = {
  count: 23
};

export function reducer(state = initialState, action) {
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
