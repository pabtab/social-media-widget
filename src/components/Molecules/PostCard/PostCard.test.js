import React from 'react';
import {shallow} from 'enzyme';
import PostCard from './PostCard';


describe('PostCard Tests', () => {
  test('should render PostCard without header', () => {
    const wrapper = shallow(<PostCard title="Test Title" subtitle="Subtitle Test" paragraph="Test Paragraph"></PostCard>)

    expect(wrapper.html()).toBe('<article class="card post-card"><section class="card-body"><h4 class="card-title">Test Title</h4><h6 class="card-subtitle mb-2 text-muted">Subtitle Test</h6><p class="card-text">Test Paragraph</p></section></article>')
  })
  
})
