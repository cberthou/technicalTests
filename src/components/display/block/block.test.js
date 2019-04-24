import React from 'react';
import { shallow } from 'enzyme';
import Block from './block';

describe('src/components/display/block', () => {
    it('should display the account balance', () => {
        const wrapper = shallow(<Block>Content</Block>);

        expect(wrapper).toMatchSnapshot();
    });
});
