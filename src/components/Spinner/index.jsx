import React from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

const Spinner = () => (
  <div>
    <Loader type="Bars" color="#108ee9" timeout={10000} className="Loader" />
  </div>
)

export default Spinner
