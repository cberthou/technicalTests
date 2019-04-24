import { FETCH_ACCOUNT_BALANCE_SUCCESS } from './types';

const DEFAULT_STATE = {
  balance: 0,
};

const balance = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case FETCH_ACCOUNT_BALANCE_SUCCESS:
      return { ...state, balance: action.balance };
    default:
      return state;
  }
};

export default balance;
