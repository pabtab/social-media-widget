import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment'
import SocialFeed from './SocialFeed';

import MockData from './feed.mock'


describe('SocialFeed Tests', () => {
  const URL = 'http://test.com'
  test('should render SocialFeed first 4 values', () => {
    const wrapper = shallow(<SocialFeed feedUrl={URL} numPosts={4} intervalSeg={10}></SocialFeed>)

    wrapper.setState({ data: MockData.slice(0, 4) })

    expect(wrapper.find('PostCard')).toHaveLength(4)
  })

  test('should get last id to call the next values', () => {
    const wrapper = shallow(<SocialFeed feedUrl={URL} numPosts={4} intervalSeg={10}></SocialFeed>)
    const intervalProp = wrapper.prop('intervalSeg')

    wrapper.setState({ data: MockData.slice(0, 4) })

    const lastID = wrapper.instance().getLastID()

    expect(lastID).toBe('946816482876493825')
  })

  test('should render th date in a very good format', () => {
    const wrapper = shallow(<SocialFeed feedUrl={URL} numPosts={4} intervalSeg={10}></SocialFeed>)

    wrapper.setState({ data: MockData.slice(0, 4) })
    const firstDateFormat = wrapper.find('PostCard').first().props().subtitle

    expect(moment(firstDateFormat, 'DD/MM/YYYY HH:MM', true).isValid()).toBe(true)
  })
  
})
