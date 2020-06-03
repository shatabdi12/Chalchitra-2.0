import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Home from '../components/Home'
import Favourites from '../components/Favourites'
import WatchLater from '../components/WatchLater'
import Movie from '../components/Home/MovieTable/Movie'

const Routes = ({
  addToUserList,
  favoriteMovies,
  removeFromUserList,
  watchLaterList,
}) => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <Home
            title="Home"
            addToList={addToUserList}
            favorites={favoriteMovies}
            removeFromList={removeFromUserList}
            watchLater={watchLaterList}
          />
        )}
      />
      <Route
        path="/movie/:id-:title"
        render={props => (
          <Movie
            {...props}
            addToList={addToUserList}
            favorites={favoriteMovies}
            removeFromList={removeFromUserList}
            watchLater={watchLaterList}
          />
        )}
      />
      <Route
        path="/favourites"
        exact
        render={() => (
          <Favourites
            title="Favorites"
            addToList={addToUserList}
            favorites={favoriteMovies}
            removeFromList={removeFromUserList}
            watchLater={watchLaterList}
          />
        )}
      />
      <Route
        path="/watchlater"
        exact
        render={() => (
          <WatchLater
            title="Watch Later"
            addToList={addToUserList}
            favorites={favoriteMovies}
            removeFromList={removeFromUserList}
            watchLater={watchLaterList}
          />
        )}
      />
    </Switch>
  )
}

Routes.propTypes = {
  favoriteMovies: PropTypes.array,
  watchLaterList: PropTypes.array,
}

export default Routes
