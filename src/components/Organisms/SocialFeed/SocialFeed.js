import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import BasicCard from '../../Molecules/BasicCard'
import api from '../../../api'
import PostCard from '../../Molecules/PostCard'

import './SocialFeed.scss'

export default class SocialFeed extends Component {
  static propTypes = {
    feedUrl: PropTypes.string.isRequired,
    numPosts: PropTypes.number,
    interval: PropTypes.number
  }

  state = {
    data: [],
    intervarlNum: 0
  }

  componentDidMount() {
    this.callApiFeed()
    this.intervalCall = setInterval(() => {
      this.callApiFeed()
    }, this.props.intervalSeg * 1000)
  }

  componentDidUpdate() {
    const { data } = this.state
    if(data && data.length >= 40) {
      clearInterval(this.intervalCall)
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalCall)
  }

  callApiFeed() {
    const lastID = this.getLastID()
    api(this.props.feedUrl, lastID).then(res => {
      this.setState({data: this.state.data.concat(res)})
    })
    .catch(err => console.log(err))
  }

  getLastID() {
    const {data} = this.state
    return data && data.length 
      ? data[data.length - 1].id_str
      : null
  }

  sortByNewest(a, b) {
    if (a.created_at < b.created_at) return -1;
    if (a.created_at > b.created_at) return 1;
    
    return 0;
  }

  renderPosts() {
    return [...this.state.data]
    .sort(this.sortByNewest)
    .slice(0, this.props.numPosts)
    .map(item => (
      <PostCard 
        title={item.user.name}
        subtitle={moment(item.created_at).format('DD/MM/YYYY HH:MM')}
        paragraph={item.text}
        key={item.id}
      />
    ))
  }

  render() {
    const { data } = this.state
    return (
      <BasicCard className="social-feed" title="Social Feed">
        {
          data
          && data.length > 0
          && this.renderPosts()
        }
      </BasicCard>
    )
  }
}
