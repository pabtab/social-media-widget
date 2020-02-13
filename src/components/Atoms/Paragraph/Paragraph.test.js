import React from 'react';
import {shallow} from 'enzyme';
import Paragraph from './Paragraph';


describe('Paragraph Tests', () => {
  test('should render Paragraph', () => {
    const wrapper = shallow(<Paragraph>Test</Paragraph>)

    expect(wrapper.html()).toBe('<p class="card-text">Test</p>')
  })
  
})
