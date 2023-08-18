import { useEffect, useMemo, useRef, useState } from 'react'

import { getGames } from '../services/get-games'
import { getPlatforms } from '../services/get-platforms'
import { API } from '../constants/url'

const useGames = ({ search = '', platformOrGenres = '' }) => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const nextPage = useRef('')
  const [portada, setPortada] = useState({ titulo: '', imagen: '' })

  const getMoreGames = ({ url }) => {
    getGames({ url })
      .then(data => {
        console.log(data)
        nextPage.current = data.next
        if (!portada.titulo) { setPortada({ titulo: data.results[0]?.name, imagen: data.results[0]?.background_image }) }
        setGames(prev => {
          const prevGames = structuredClone(prev)
          const newGames = prevGames.concat(data.results)
          return newGames
        })
      }).catch(err =>
        setError(err.message))
      .finally(setLoading(false))
  }

  const getGamesByPlatform = (platformOrGenres) => {
    getPlatforms()
      .then(data => {
        const results = data.filter(data => data.slug === platformOrGenres)
        const platformEncontrada = results[0]?.id
        const urlGamesByPlatform = `${API.SECTION.GAMES}?${API.API_KEY}&platforms=${platformEncontrada}`
        if (platformEncontrada) {
          getMoreGames({ url: urlGamesByPlatform })
        } else {
          const url = !platformEncontrada && `${API.SECTION.GAMES}?${API.API_KEY}&genres=${platformOrGenres}`.toLowerCase()
          getMoreGames({ url })
        }
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    setLoading(true)
    setError('')
    setGames([])
    if (platformOrGenres) {
      getGamesByPlatform(platformOrGenres)
      return
    }
    if (search) {
      const url = `${API.SECTION.GAMES}?${API.API_KEY}&search=${search}`
      getMoreGames({ url })
      return
    }
    const url = `${API.SECTION.GAMES}?${API.API_KEY}`
    getMoreGames({ url })
  }, [search, platformOrGenres])

  const portadas = useMemo(() => games.map(game => {
    return {
      imagen: game.background_image,
      titulo: game.name
    }
  }), [games])

  useEffect(() => {
    // cambia las portadas de manera aleatoria
    const portadaChanger = setTimeout(() => {
      const portadaAleatoria = Math.floor(Math.random() * games.length)
      setPortada(portadas[portadaAleatoria])
    }, 5000)
    return () => clearTimeout(portadaChanger)
  }, [portada])

  return { games, getMoreGames, loading, error, portada, nextPage }
}

export default useGames
