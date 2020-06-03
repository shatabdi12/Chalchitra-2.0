import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const FavStar = ({ favoriteMovie, favorites, isLoved, movie, unfavoriteMovie }) => {
  const matchFav = favorites.find(fav => fav.id === movie.id)
  return isLoved || matchFav ? (
    <div className="tooltip">
      <FontAwesomeIcon
        icon={faStarFull}
        size="2x"
        className="font-star"
        onClick={() => unfavoriteMovie()}
      />
      <span className="tooltipText">Added</span>
    </div>
  ) : (
    <div className="tooltip">
      <FontAwesomeIcon icon={faStar} size="2x" onClick={() => favoriteMovie()} />
      <span className="tooltipText">+ Favorites</span>
    </div>
  )
}

FavStar.propTypes = {
  favoriteMovie: PropTypes.func,
  favorites: PropTypes.array,
  isLoved: PropTypes.bool,
  movie: PropTypes.object,
  unfavoriteMovie: PropTypes.func,
}
export default FavStar
