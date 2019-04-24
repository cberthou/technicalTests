import { fetchAccountBalanceSuccess } from './actions';

export const fetchAccountBalance = () => (dispatch) => {
  dispatch(fetchAccountBalanceSuccess(1000));
};
