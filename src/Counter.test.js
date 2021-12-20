import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

it('Counter', () => {
    const wrapper = shallow(<Counter />);
    const result = wrapper.find('h2').text();
    
    expect(result).toBe('0');

    const button = wrapper.find('button');
    button.simulate('click');

    const counterValue = wrapper.find('h2').text();

    expect(counterValue).toBe('1');
});