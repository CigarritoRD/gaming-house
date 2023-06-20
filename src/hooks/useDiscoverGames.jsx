import { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../constants/url'

const typesOfUrls = {
  mejores: `${API_URL}games?${API_KEY}&metacritic=75,100&ordering=-metacritic`,
  nuevos: `${API_URL}games?${API_KEY}&dates=2022-09-01,2023-09-01&ordering=-released`,
  'proximos-estrenos': '',
  plataformas: ''
}
export function useDiscoverGames ({ type }) {
  const [games, setGamesBy] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [next, setNext] = useState(1)

  const getType = async (page) => {
    try {
      const response = await fetch(`${typesOfUrls[type]}&page=${page}`)

      if (!response.ok) return new Error('hubo un problema con el servidor')
      const url = response.url.split('=')
      const nextPage = Number(url[url.length - 1])
      setNext(nextPage + 1)
      const { results } = await response.json()
      const data = results.map(item => {
        return { ...item }
      })
      setGamesBy(prevGames => {
        const games = structuredClone(prevGames)
        const newgames = games.concat(data)

        return newgames
      })
    } catch (error) {
      console.log(error)
    } finally { setIsloading(false) }
  }
  useEffect(() => {
    setGamesBy([])
    setIsloading(true)
    getType(next)
  }, [type])

  return { games, isLoading, getType, next }
}
