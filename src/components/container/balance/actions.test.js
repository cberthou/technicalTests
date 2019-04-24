import { fetchAccountBalanceSuccess } from './actions';
import { FETCH_ACCOUNT_BALANCE_SUCCESS } from './types';

describe('src/components/container/balance/actions', () => {
  describe('fetchAccountBalanceSuccess', () => {
    it('should return the balance', () => {
      const balance = 1234;
      const action = fetchAccountBalanceSuccess(balance);

      expect(action).toEqual({
        type: FETCH_ACCOUNT_BALANCE_SUCCESS,
        balance,
      });
    });
  });
});
