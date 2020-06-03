import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const WatchList = ({ addWatch, movieData, unwatchMovie, watchLater, watchMovie }) => {
  const result = movieData ? watchLater.find(plus => plus.id === movieData.id) : null
  return (
    <div className="clock">
      {addWatch || result ? (
        <div className="tooltip">
          <FontAwesomeIcon
            className="font-clock"
            icon={faClock}
            onClick={unwatchMovie}
            size="2x"
          />
          <span className="tooltipText">Added</span>
        </div>
      ) : (
        <div className="tooltip">
          <FontAwesomeIcon icon={faClock} onClick={watchMovie} size="2x" />
          <span className="tooltipText">+ WatchList</span>
        </div>
      )}
    </div>
  )
}

WatchList.propTypes = {
  addWatch: PropTypes.bool,
  movieData: PropTypes.object,
  unwatchMovie: PropTypes.func,
  watchLater: PropTypes.array,
  watchMovie: PropTypes.func,
}
export default WatchList
