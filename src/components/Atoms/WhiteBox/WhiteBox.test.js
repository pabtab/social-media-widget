import React from 'react';
import {shallow} from 'enzyme';
import WhiteBox from './WhiteBox';


describe('WhiteBox Tests', () => {
  test('should render WhiteBox', () => {
    const wrapper = shallow(<WhiteBox className="test">Test</WhiteBox>)

    expect(wrapper.html()).toBe('<article class="card test">Test</article>')
  })
  
})
