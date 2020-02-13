import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({children}) => {
  return (
    <p className="card-text">
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.any
}

export default Paragraph
