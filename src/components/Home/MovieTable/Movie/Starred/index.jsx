import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const Starred = ({ favoriteMovie, favorites, isLoved, movieData, unfavoriteMovie }) => {
  const match = movieData ? favorites.find(fav => fav.id === movieData.id) : null
  return (
    <div className="star">
      {isLoved || match ? (
        <div className="tooltip">
          <FontAwesomeIcon
            className="font-star"
            icon={faStarFull}
            onClick={unfavoriteMovie}
            size="2x"
          />
          <span className="tooltipText">Added</span>
        </div>
      ) : (
        <div className="tooltip">
          <FontAwesomeIcon icon={faStar} onClick={favoriteMovie} size="2x" />
          <span className="tooltipText">+ Favorites</span>
        </div>
      )}
    </div>
  )
}

Starred.propTypes = {
  favoriteMovie: PropTypes.func,
  favorites: PropTypes.array,
  isLoved: PropTypes.bool,
  movieData: PropTypes.object,
  unfavoriteMovie: PropTypes.func,
}

export default Starred
