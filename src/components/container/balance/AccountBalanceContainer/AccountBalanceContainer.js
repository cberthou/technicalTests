import { connect } from 'react-redux';
import AccountBalanceRenderer from '../AccountBalanceRenderer/AccountBalanceRenderer';
import { fetchAccountBalance } from '../operations';

const mapStateToProps = ({
  balance: {
    balance
  }
}) => ({
  balance
});

const mapDispatchToProps = {
  fetchAccountBalance,
};

const AccountBalanceContainer = connect(mapStateToProps, mapDispatchToProps)(AccountBalanceRenderer);

export default AccountBalanceContainer;
