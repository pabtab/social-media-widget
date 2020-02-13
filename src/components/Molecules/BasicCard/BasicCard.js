import React from 'react'
import PropTypes from 'prop-types'

import WhiteBox from '../../Atoms/WhiteBox'

import './BasicCard.scss'

const BasicCard = ({ children, title, className }) => {
  return (
    <WhiteBox className={`basic-card ${className}`}>
      {
        title && (
          <header className="card-header">
            {title}
          </header>
        )
      }
      <section className="card-body">
        {children}
      </section>
    </WhiteBox>
  )
}

BasicCard.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string
}

export default BasicCard
