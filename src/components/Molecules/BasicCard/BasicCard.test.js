import React from 'react';
import {shallow} from 'enzyme';
import BasicCard from './BasicCard';


describe('BasicCard Tests', () => {
  test('should render BasicCard without header', () => {
    const wrapper = shallow(<BasicCard className="test">Test</BasicCard>)

    expect(wrapper.html()).toBe('<article class="card basic-card test"><section class="card-body">Test</section></article>')
  })

  test('should render BasicCard with header', () => {
    const wrapper = shallow(<BasicCard title="Test Title" className="test">Test</BasicCard>)

    expect(wrapper.html()).toBe('<article class="card basic-card test"><header class="card-header">Test Title</header><section class="card-body">Test</section></article>')
  })
  
})
