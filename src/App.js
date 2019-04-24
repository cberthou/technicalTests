import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import AccountBalanceContainer from './components/container/balance/AccountBalanceContainer/AccountBalanceContainer';

function App() {
  return (
    <div className="main">
      <Provider store={store}>
        <AccountBalanceContainer />
      </Provider>
    </div>
  );
}

export default App;
