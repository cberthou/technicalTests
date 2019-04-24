import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchAccountBalance } from './operations';
import { fetchAccountBalanceSuccess } from './actions';

const mockStore = configureMockStore([ thunk ]);

describe('src/components/container/balance/actions', () => {
  describe('fetchAccountBalance', () => {
    it('should return the balance', () => {
      const store = mockStore({});

      store.dispatch(fetchAccountBalance());

      expect(store.getActions()).toEqual([
        fetchAccountBalanceSuccess(1000),
      ]);
    });
  });
});
