import React from 'react'
import Header from '../Header'
import PropTypes from 'prop-types'
import { PATH_POSTER } from '../../constants'
import NoImg from '../../images/NoImage.png'
import emptyBox from '../../images/empty-box.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons'
import './index.css'

const Favourites = ({ favorites, removeFromList }) => {
  const unfavoriteMovie = favMovie => {
    removeFromList(favMovie, 'favorites')
  }

  return (
    <main>
      <Header />
      {favorites.length > 0 ? (
        <div>
          {favorites.map(favMovie => (
            <div key={favMovie.id} className="favorite-movies">
              <div className="fav-movie-img">
                <div>
                  <img
                    className="movie-img"
                    src={
                      favMovie.poster_path !== null
                        ? `${PATH_POSTER}${favMovie.poster_path}`
                        : NoImg
                    }
                    alt={`The movie titled: ${favMovie.original_title}`}
                  />
                </div>
                <div className="icon-pos">
                  <div className="tooltip">
                    <FontAwesomeIcon
                      icon={faStarFull}
                      size="2x"
                      className="font-star"
                      onClick={() => unfavoriteMovie(favMovie)}
                    />
                    <span className="tooltipText">Remove</span>
                  </div>
                </div>
              </div>
              <div className="fav-movie-data">
                <h2 className="movie-data-title">{favMovie.original_title}</h2>
                <hr />
                <strong>Description: </strong>
                <p>{favMovie.overview}</p>
                <hr />
                <strong>Vote Average: </strong>
                <p>{favMovie.vote_average}/10</p>
                <hr />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-list">
          <img src={emptyBox} alt={'Empty Box'} />
          <br />
          <span className="empty-favlist">Your favorite list is empty</span>
          <br />
          <span className="empty-addon">
            Add movies and shows to your favorite list to keep track of what you like.
          </span>
        </div>
      )}
    </main>
  )
}

Favourites.propTypes = {
  favorites: PropTypes.array,
}
export default Favourites
