import React from 'react'
import PropTypes from 'prop-types'
import WhiteBox from '../../Atoms/WhiteBox'

import './PostCard.scss'
import Paragraph from '../../Atoms/Paragraph'

const PostCard = ({title, subtitle, paragraph}) => {
  return (
    <WhiteBox className="post-card">
      <section className="card-body">
        <h4 className="card-title">{title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <Paragraph>{paragraph}</Paragraph>
      </section>
    </WhiteBox>
  )
}

PostCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  paragraph: PropTypes.string
}

export default PostCard
