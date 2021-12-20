import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('Header', () => {
    const wrapper = shallow(<Header label="Header" />);
    const result = wrapper.find('div').text();

    expect(result).toBe('Header');
});