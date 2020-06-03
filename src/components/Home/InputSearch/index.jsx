import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import useForm from '../../../useForm'

const InputGamneType = ({ onMovieSearch }) => {
  const [values, handleSearch] = useForm({ search: '' })

  return (
    <div className="input-div">
      <form className="input-form">
        <input
          name="search"
          value={values.search}
          onChange={handleSearch}
          placeholder="Search a movie..."
          type="text"
          className="input-field"
        />
        <input
          className="input-search"
          onSubmit={onMovieSearch(values.search)}
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
