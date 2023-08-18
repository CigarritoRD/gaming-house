import { useEffect, useRef, useState } from 'react'
import { API_KEY, API_URL } from '../constants/url'
import { getGames } from '../services/getGames'

const typesOfUrls = {
  mejores: `${API_URL}games?${API_KEY}&metacritic=75,100&ordering=-metacritic&page=1`,
  nuevos: `${API_URL}games?${API_KEY}&dates=2022-09-01,2023-09-01&ordering=-released&page=1`,
  'proximos-estrenos': '',
  plataformas: ''
}
export function useDiscoverGames ({ type }) {
  const [games, setGamesBy] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const NextPage = useRef('')

  const getType = async () => {
    setIsloading(true)
    try {
      const url = NextPage.current !== '' ? NextPage.current : `${typesOfUrls[type]}`
      const { next, results } = await getGames({ url })
      NextPage.current = next
      const mapedGames = results.map(item => {
        return { ...item }
      })
      setGamesBy(prevGames => {
        const games = structuredClone(prevGames)
        const newgames = games.concat(mapedGames)
        return newgames
      })
    } catch (error) {
      console.log(error)
    } finally { setIsloading(false) }
  }
  useEffect(() => {
    NextPage.current = ''
    setGamesBy([])
    getType()
  }, [type])

  return { games, isLoading, getType }
}
