import reducer from './reducer';
import { fetchAccountBalanceSuccess } from './actions';

describe('src/components/container/balance/reducer', () => {
  describe('default state', () => {
    it('should set default balance', () => {
      const newState = reducer(undefined, {});

      expect(newState).toEqual({
        balance: 0,
      });
    });
  });
  describe('with action fetchAccountBalanceSuccess ', () => {
    it('should update store balance', () => {
      const state = {
        balance: 1200,
      };

      const newBalance = 1300;

      const newState = reducer(state, fetchAccountBalanceSuccess(newBalance));

      expect(newState).toEqual({
        balance: newBalance,
      });
    });
  });
});
