import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const AddWatch = ({ addWatch, movie, unwatchMovie, watchLater, watchMovie }) => {
  const matchWatch = watchLater.find(plus => plus.id === movie.id)
  return addWatch || matchWatch ? (
    <div className="tooltip">
      <FontAwesomeIcon
        icon={faClock}
        size="2x"
        className="font-clock"
        onClick={() => unwatchMovie()}
      />
      <span className="tooltipText">Added</span>
    </div>
  ) : (
    <div className="tooltip">
      <FontAwesomeIcon icon={faClock} size="2x" onClick={() => watchMovie()} />
      <span className="tooltipText">+ WatchList</span>
    </div>
  )
}

AddWatch.propTypes = {
  addWatch: PropTypes.bool,
  movie: PropTypes.object,
  unwatchMovie: PropTypes.func,
  watchLater: PropTypes.array,
  watchMovie: PropTypes.func,
}
export default AddWatch
