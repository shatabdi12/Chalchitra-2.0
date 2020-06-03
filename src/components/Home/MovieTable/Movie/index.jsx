import React, { useState } from 'react'
import posed, { PoseGroup } from 'react-pose'
import useFetch from '../../../../useFetch'
import Starred from './Starred'
import Header from '../../../Header'
import NoImg from '../../../../images/NoImage.png'
import PropTypes from 'prop-types'
import ShowTrailer from './ShowTrailer'
import Spinner from '../../../Spinner'
import WatchList from './WatchList'
import { API_KEY, PATH_BASE, PATH_MOVIE, PATH_POSTER } from '../../../../constants'
import './index.css'

const PosedContainer = posed.div({
  enter: { y: 0, opacity: 1, delay: 300 },
  exit: { y: -50, opacity: 0, transition: { duration: 200 } },
})

const Movie = ({ addToList, favorites, match, removeFromList, watchLater }) => {
  const [isLoved, setLoved] = useState(false)
  const [addWatch, setWatch] = useState(false)
  const MOVIE_ID = match.params.id
  const MOVIE_API_URL = `${PATH_BASE}${PATH_MOVIE}/${MOVIE_ID}?api_key=${API_KEY}&append_to_response=videos`
  const { movieData, isLoading } = useFetch(MOVIE_API_URL)

  const favoriteMovie = () => {
    setLoved(true)
    addToList(movieData, 'favorites')
  }

  const unfavoriteMovie = () => {
    setLoved(false)
    removeFromList(movieData, 'favorites')
  }

  const watchMovie = () => {
    setWatch(true)
    addToList(movieData, 'watchLater')
  }

  const unwatchMovie = () => {
    setWatch(false)
    removeFromList(movieData, 'watchLater')
  }

  return (
    <main>
      <Header />
      <section className="app-content">
        <PoseGroup>
          {movieData && !isLoading && (
            <PosedContainer key="view">
              {movieData.total_results === 0 ? (
                <h3>Movie Not Found</h3>
              ) : (
                <div key={movieData.id} className="movie-data">
                  <div className="column-movie-img">
                    <img
                      className="poster-img"
                      src={
                        movieData.poster_path === null
                          ? NoImg
                          : `${PATH_POSTER}${movieData.poster_path}`
                      }
                      alt={`The movie titled: ${movieData.original_title}`}
                    />
                    <div className="movie-actions">
                      <Starred
                        favoriteMovie={favoriteMovie}
                        favorites={favorites}
                        isLoved={isLoved}
                        movieData={movieData}
                        unfavoriteMovie={unfavoriteMovie}
                      />
                      <WatchList
                        addWatch={addWatch}
                        movieData={movieData}
                        unwatchMovie={unwatchMovie}
                        watchLater={watchLater}
                        watchMovie={watchMovie}
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="column-movie-data">
                    <h2 className="movie-data-title">{movieData.original_title}</h2>
                    <hr />
                    <strong>Description: </strong>
                    <p>{movieData.overview}</p>
                    <hr />
                    <strong>Vote Average: </strong>
                    <p>{movieData.vote_average}/10</p>
                    <hr />
                    <strong>Trailer: </strong>
                    <div key="player">
                      <ShowTrailer movieData={movieData} />
                    </div>
                  </div>
                </div>
              )}
            </PosedContainer>
          )}
        </PoseGroup>
        {isLoading && <Spinner />}
      </section>
    </main>
  )
}

Movie.propTypes = {
  favorites: PropTypes.array,
  match: PropTypes.object,
  watchLater: PropTypes.array,
}

export default Movie
