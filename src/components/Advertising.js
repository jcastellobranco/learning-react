import React from 'react'
import PropTypes from 'prop-types'

function Advertising(props) {

  return (
    <div>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  )
}

Advertising.propTypes = {
  title:PropTypes.string
}

export default Advertising;
