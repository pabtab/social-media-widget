import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import BasicCard from '../../Molecules/BasicCard'
import api from '../../../api'
import PostCard from '../../Molecules/PostCard'

import './SocialFeed.scss'

const SocialFeed = ({feedUrl, numPosts = 10, interval}) => {
  const [data, setData] = useState([])
  useEffect(() => {
    api(feedUrl).then(res => {
      setData(res)
    })
    .catch(err => console.log(err))

  }, [feedUrl])

  const sortByNewest = (a, b) => {
    if (a.created_at < b.created_at) return -1;
    if (a.created_at > b.created_at) return 1;
    
    return 0;
  }

  const renderPosts = () => {
    return data
    .sort(sortByNewest)
    .slice(0, numPosts)
    .map(item => (
      <PostCard 
        title={item.user.name}
        subtitle={moment(item.created_at).format('DD/MM/YYYY HH:MM')}
        paragraph={item.text}
        key={item.id}
      />
    ))
  }
  return (
    <BasicCard className="social-feed" title="Social Feed">
      {
        data
        && data.length > 0
        && renderPosts()
      }
    </BasicCard>
  )
}

SocialFeed.propTypes = {
  feedUrl: PropTypes.string.isRequired,
  numPosts: PropTypes.number,
  interval: PropTypes.number

}

export default SocialFeed
