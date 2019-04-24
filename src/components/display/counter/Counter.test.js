import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('src/components/display/counter', () => {
    it('should display the account balance', () => {
        const wrapper = shallow(<Counter count="1234" />);

        expect(wrapper).toMatchSnapshot();
    });
});
