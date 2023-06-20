import { useEffect, useState } from 'react'

import { getGames } from '../helpers/getGames'
import { getPlatforms } from '../helpers/getPlatforms'
import { API } from '../constants/url'

const useGames = ({ name }) => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState('')

  const getMoreGames = ({ url }) => {
    getGames({ url })
      .then(data => {
        setPage(data.next)
        setGames(prev => {
          const prevGames = structuredClone(prev)
          const newGames = prevGames.concat(data.results)
          return newGames
        })
      }).catch(err =>
        setError(err.message))
      .finally(setLoading(false))
  }

  useEffect(() => {
    setLoading(true)
    setError('')
    setGames([])
    getPlatforms()
      .then(data => {
        const results = data.filter(data => data.slug === name)
        const platform = results[0]?.id
        const urlGamesByPlatform = `${API.SECTION.GAMES}?${API.API_KEY}&platforms=${platform}`
        if (platform) {
          getMoreGames({ url: urlGamesByPlatform })
        } else {
          const url = !name ? `${API.SECTION.GAMES}?${API.API_KEY}` : `${API.SECTION.GAMES}?${API.API_KEY}&genres=${name}`.toLowerCase()
          getMoreGames({ url })
        }
      })
      .catch(err => console.log(err))
  }, [name])

  return { games, getMoreGames, loading, error, page }
}

export default useGames
