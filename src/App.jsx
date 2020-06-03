import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import './App.css'

const App = () => {
  const [favoriteMovies, setFavourites] = useState([])
  const [watchLaterList, setWatchLaterList] = useState([])

  const addToUserList = (selectedMovie, userList) => {
    if (userList === 'favorites') setFavourites([...favoriteMovies, selectedMovie])
    else if (userList === 'watchLater')
      setWatchLaterList([...watchLaterList, selectedMovie])
  }

  const removeFromUserList = (selectedMovie, userList) => {
    if (userList === 'favorites')
      setFavourites(favoriteMovies.filter(e => e.id !== selectedMovie.id))
    else if (userList === 'watchLater')
      setWatchLaterList(watchLaterList.filter(e => e.id !== selectedMovie.id))
  }

  return (
    <Router>
      <Routes
        addToUserList={addToUserList}
        favoriteMovies={favoriteMovies}
        removeFromUserList={removeFromUserList}
        watchLaterList={watchLaterList}
      />
    </Router>
  )
}

export default App
