import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const InputGamneType = ({ onMovieSearch }) => {
  const [searchValue, setSearchValue] = useState('')

  const onChangeMovieSearch = e => {
    setSearchValue(e.target.value)
  }

  const onSubmitValue = e => {
    e.preventDefault()
    onMovieSearch(searchValue)
    resetInputField()
  }
  const resetInputField = () => {
    setSearchValue('')
  }

  return (
    <div className="input-div">
      <form className="input-form">
        <input
          value={searchValue}
          onChange={onChangeMovieSearch}
          placeholder="Search a movie..."
          type="text"
          className="input-field"
        />
        <input
          className="input-search"
          onClick={onSubmitValue}
          type="submit"
          value="SEARCH"
        />
      </form>
    </div>
  )
}

InputGamneType.propTypes = {
  onMovieSearch: PropTypes.func.isRequired,
}

export default InputGamneType
