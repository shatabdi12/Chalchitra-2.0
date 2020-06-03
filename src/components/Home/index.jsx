import React, { useState, useEffect } from 'react'
import Header from '../Header'
import InputSearch from './InputSearch'
import useFetch from '../../useFetch'
import PropTypes from 'prop-types'
import MovieTable from './MovieTable'
import posed, { PoseGroup } from 'react-pose'
import Spinner from '../Spinner'
import sadFace from '../../images/sad-face.png'
import {
  API_KEY,
  PATH_BASE,
  PATH_SEARCH,
  PATH_MOVIE,
  PATH_PAGE,
  DEFAULT_PAGE,
} from '../../constants'
import './index.css'

const PosedContainer = posed.div({
  enter: { y: 0, opacity: 1, delay: 300 },
  exit: { y: -50, opacity: 0, transition: { duration: 200 } },
})

const Home = ({ addToList, favorites, removeFromList, watchLater }) => {
  const defaultValue = 'happy'
  const [value, setValue] = useState(() => {
    const stickyValue = localStorage.getItem('value')
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })

  const MOVIE_API_URL = `${PATH_BASE}${PATH_SEARCH}${PATH_MOVIE}?api_key=${API_KEY}&query=${value}&${PATH_PAGE}${DEFAULT_PAGE}`
  const { movieData, isLoading } = useFetch(MOVIE_API_URL)

  const handleMovieSearch = searchValue => {
    if (searchValue) {
      setValue(searchValue)
    }
  }

  useEffect(() => {
    localStorage.setItem('value', JSON.stringify(value))
  }, [value])

  return (
    <main>
      <Header />
      <section className="app-content">
        <InputSearch onMovieSearch={handleMovieSearch} />
        <PoseGroup>
          {movieData && !isLoading && (
            <PosedContainer key="view">
              {movieData.total_results === 0 ? (
                <div className="empty-list">
                  <img src={sadFace} alt={'Sad Face'} className="sad-img" />
                  <br />
                  <span className="empty-movielist">Movie Not Found</span>
                  <br />
                </div>
              ) : (
                <div className="table">
                  {movieData.results.map((movie, index) => (
                    <MovieTable
                      key={movie.id}
                      index={index}
                      movie={movie}
                      onFavoriteSelect={(selectedMovie, userList) =>
                        addToList(selectedMovie, userList)
                      }
                      onFavoriteDeselect={(selectedMovie, userList) =>
                        removeFromList(selectedMovie, userList)
                      }
                      favorites={favorites}
                      watchLater={watchLater}
                    />
                  ))}
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

Home.propTypes = {
  favorites: PropTypes.array,
  watchLater: PropTypes.array,
}

export default Home
