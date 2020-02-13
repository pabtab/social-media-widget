import React from 'react'
import PropTypes from 'prop-types'

import './WhiteBox.scss'

const WhiteBox = ({ children,className }) => {
  return (
    <article className={`card ${className}`}>
      {children}
    </article>
  )
}

WhiteBox.propTypes = {
  children: PropTypes.any
}

export default WhiteBox
