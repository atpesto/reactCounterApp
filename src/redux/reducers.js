import { combineReducers } from "redux";

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, count: state.count + 1 };
    case 'DEC':
      return { ...state, count: state.count - 1 };
    case 'CLEAR':
      return { ...state, count: 0 };
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;

