import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import balance from './components/container/balance/reducer';

const store = createStore(combineReducers({
  balance,
}), applyMiddleware(thunk));

export default store;
