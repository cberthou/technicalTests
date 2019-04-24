import React from 'react';
import { shallow } from 'enzyme';
import CounterLabel from './CounterLabel';

describe('src/components/display/counterLabel', () => {
    it('should display the label', () => {
        const wrapper = shallow(<CounterLabel count="1234" />);

        expect(wrapper).toMatchSnapshot();
    });
});
