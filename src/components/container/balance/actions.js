import { FETCH_ACCOUNT_BALANCE_SUCCESS } from './types';

export const fetchAccountBalanceSuccess = (balance) => ({
  type: FETCH_ACCOUNT_BALANCE_SUCCESS,
  balance,
});
