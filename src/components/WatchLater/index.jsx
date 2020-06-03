import React from 'react'
import Header from '../Header'
import PropTypes from 'prop-types'
import { PATH_POSTER } from '../../constants'
import NoImg from '../../images/NoImage.png'
import emptyBox from '../../images/empty-box.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './index.css'

const WatchLater = ({ removeFromList, watchLater }) => {
  const unwatchMovie = addMovie => {
    removeFromList(addMovie, 'watchLater')
  }

  return (
    <main>
      <Header />
      {watchLater.length > 0 ? (
        <div>
          {watchLater.map(addMovie => (
            <div key={addMovie.id} className="favorite-movies">
              <div className="fav-movie-img">
                <div>
                  <img
                    className="movie-img"
                    src={
                      addMovie.poster_path !== null
                        ? `${PATH_POSTER}${addMovie.poster_path}`
                        : NoImg
                    }
                    alt={`The movie titled: ${addMovie.original_title}`}
                  />
                </div>
                <div className="icon-pos">
                  <div className="tooltip">
                    <FontAwesomeIcon
                      icon={faClock}
                      size="2x"
                      className="font-clock"
                      onClick={() => unwatchMovie(addMovie)}
                    />
                    <span className="tooltipText">Remove</span>
                  </div>
                </div>
              </div>
              <div className="fav-movie-data">
                <h2 className="movie-data-title">{addMovie.original_title}</h2>
                <hr />
                <strong>Description: </strong>
                <p>{addMovie.overview}</p>
                <hr />
                <strong>Vote Average: </strong>
                <p>{addMovie.vote_average}/10</p>
                <hr />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-list">
          <img src={emptyBox} alt={'Empty Box'} />
          <br />
          <span className="empty-watchlist">Your Watchlist is empty</span>
          <br />
          <span className="empty-addon">
            Add movies and shows to your Watchlist to keep track of what you want to
            watch.
          </span>
        </div>
      )}
    </main>
  )
}

WatchLater.propTypes = {
  watchLater: PropTypes.array,
}
export default WatchLater
