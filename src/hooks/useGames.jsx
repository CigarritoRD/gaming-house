import { useEffect, useState } from 'react'

import { getGames } from '../helpers/getGames'
import { getPlatforms } from '../helpers/getPlatforms'

const useGames = ({ name }) => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')
    setGames([])
    getPlatforms()
      .then(data => {
        const results = data.filter(data => data.slug === name)
        const platform = results[0]?.id

        getGames(platform ?? name)
          .then(data => {
            setGames(data)
          }).catch(err =>
            setError(err.message))
          .finally(setLoading(false))
      })
      .catch(err => console.log(err))
  }, [name])

  return { games, getGames, loading, error }
}

export default useGames
