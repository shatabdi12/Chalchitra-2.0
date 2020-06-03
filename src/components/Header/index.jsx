import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faClock } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import './index.css'

const Header = () => {
  return (
    <ul className="nav-container">
      <li className="nav-item">
        <Link to={'/'}>
          <FontAwesomeIcon icon={faHome} size="xs" className="icon" />
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to={'/favourites'}>
          <FontAwesomeIcon icon={faStar} size="xs" className="icon" />
          Favorites
        </Link>
      </li>
      <li className="nav-item">
        <Link to={'/watchlater'}>
          <FontAwesomeIcon icon={faClock} size="xs" className="icon" />
          Watch Later
        </Link>
      </li>
    </ul>
  )
}

export default Header
