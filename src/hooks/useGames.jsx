import { useEffect, useMemo, useRef, useState } from 'react'

import { getGames } from '../services/getGames'
import { getPlatforms } from '../services/getPlatforms'
import { API } from '../constants/url'

const useGames = ({ search = '', platformOrGenres = '' }) => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState('')
  const [portada, setPortada] = useState({})

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
      console.log(search)
      const url = `${API.SECTION.GAMES}?${API.API_KEY}&search=${search}`
      console.log(url)
      getMoreGames({ url })
      return
    }
    const url = `${API.SECTION.GAMES}?${API.API_KEY}`
    getMoreGames({ url })
  }, [search, platformOrGenres])

  const portadaInicial = useRef({ name: '', imagen: '' })

  const portadas = useMemo(() => games.map(game => {
    return { imagen: game.background_image, titulo: game.name }
  }), [games])

  useMemo(() => {
    // crea una portada incial
    if (!portadaInicial.current.name && games.length > 0) {
      portadaInicial.current = { name: games[0].name, imagen: games[0]?.background_image }
      setPortada(portadaInicial.current)
    }
    // cambia las portadas de manera aleatoria
    const portadaChanger = setTimeout(() => {
      const portadaAleatoria = Math.floor(Math.random() * games.length)
      setPortada(portadas[portadaAleatoria])
    }, 5000)
    return () => clearTimeout(portadaChanger)
  }, [games, portada])

  return { games, getMoreGames, loading, error, page, portada }
}

export default useGames
