import React, { PureComponent } from 'react';
import CounterLabel from '../../../display/counterLabel/CounterLabel';
import Counter from '../../../display/counter/Counter';
import Block from '../../../display/block/block';

export default class AccountBalanceRenderer extends PureComponent {
  componentDidMount() {
    this.props.fetchAccountBalance();
  }

  render() {
    const { balance } = this.props;
    return (
      <Block>
        <CounterLabel>Your account balance is :</CounterLabel>
        <Counter count={balance} />
      </Block>
    );
  }
}
