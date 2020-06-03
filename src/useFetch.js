import { useEffect, useState } from 'react'

const useFetch = url => {
  const [state, setState] = useState({ movieData: null, isLoading: true })

  useEffect(() => {
    setState({ movieData: null, isLoading: true })
    fetch(url)
      .then(x => x.json())
      .then(y => {
        setState({ movieData: y, isLoading: false })
      })
  }, [url])
  return state
}

export default useFetch
