import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { PATH_POSTER } from '../../../constants'
import FavStar from './FavStar'
import AddWatch from './AddWatch'
import NoImg from '../../../images/NoImage.png'
import './index.css'

const MovieTable = ({
  favorites,
  index,
  movie,
  onFavoriteDeselect,
  onFavoriteSelect,
  watchLater,
}) => {
  const [isLoved, setLoved] = useState(false)
  const [addWatch, setWatch] = useState(false)
  const poster_path = `${PATH_POSTER}${movie.poster_path}`
  const poster = movie.poster_path === null ? NoImg : poster_path

  const favoriteMovie = () => {
    setLoved(true)
    onFavoriteSelect(movie, 'favorites')
  }

  const unfavoriteMovie = () => {
    setLoved(false)
    onFavoriteDeselect(movie, 'favorites')
  }

  const watchMovie = () => {
    setWatch(true)
    onFavoriteSelect(movie, 'watchLater')
  }

  const unwatchMovie = () => {
    setWatch(false)
    onFavoriteDeselect(movie, 'watchLater')
  }

  return (
    <div key={index} className="movie-table">
      <p className="movie-title">{movie.original_title}</p>
      <Link to={`/movie/${movie.id}-${movie.original_title}`}>
        <img
          className="movie-img"
          src={poster}
          alt={`The movie titled: ${movie.original_title}`}
        />
      </Link>
      <div className="movie-actions">
        <FavStar
          favoriteMovie={favoriteMovie}
          favorites={favorites}
          isLoved={isLoved}
          movie={movie}
          unfavoriteMovie={unfavoriteMovie}
        />
        <AddWatch
          addWatch={addWatch}
          movie={movie}
          unwatchMovie={unwatchMovie}
          watchLater={watchLater}
          watchMovie={watchMovie}
        />
      </div>
    </div>
  )
}

MovieTable.propTypes = {
  favorites: PropTypes.array,
  index: PropTypes.number,
  movie: PropTypes.object,
  onFavoriteDeselect: PropTypes.func.isRequired,
  onFavoriteSelect: PropTypes.func.isRequired,
  watchLater: PropTypes.array,
}

export default MovieTable
