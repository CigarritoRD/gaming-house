import { useEffect, useState } from 'react'

import { getGames } from '../helpers/getGames'

const useGames = ({ query, type }) => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')
    setGames([])
    getGames({ query, type })
      .then(data => {
        setGames(data)
        console.log(data)
      }).catch(err =>
        setError(err.message))
      .finally(setLoading(false))
  }, [query, type])
  return { games, getGames, loading, error }
}

export default useGames
