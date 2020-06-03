import React from 'react'
import ReactPlayer from 'react-player'
import { PATH_YOUTUBE } from '../../../../../constants'
import NoTrailer from '../../../../../images/NoTrailer.jpg'
import PropTypes from 'prop-types'

const ShowTrailer = ({ movieData }) => {
  const results = movieData.videos.results
  const videoKey = results.length > 0 ? results[0].key : null
  return (
    <>
      {videoKey ? (
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            controls={true}
            height="100%"
            url={`${PATH_YOUTUBE}${videoKey}`}
            width="100%"
          />
        </div>
      ) : (
        <img
          alt={`The movie titled: ${movieData.original_title}`}
          className="trailer-image"
          src={NoTrailer}
        />
      )}
    </>
  )
}

ShowTrailer.propTypes = {
  movieData: PropTypes.object,
}
export default ShowTrailer
