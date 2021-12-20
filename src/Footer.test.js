import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('Footer component', () => {
    const wrapper = shallow(<Footer />);
    console.log(wrapper.debug);
    const result = wrapper.find('div').text();
    
    expect(result).toBe('Footer');
});