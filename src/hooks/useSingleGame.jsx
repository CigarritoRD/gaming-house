import { useEffect, useState } from 'react'
import { API } from '../constants/url'

const useSingleGame = ({ slug }) => {
  const [singleGame, setSingleGame] = useState({})
  const [trailers, setTrailers] = useState()
  const [screenShots, setScreenShots] = useState([])

  useEffect(() => {
    if (slug === '') return
    const getSingleGame = async ({ slug }) => {
      const res = await fetch(`${API.SECTION.GAMES}/${slug}?${API.API_KEY}`)
      const data = await res.json()
      if (data) {
        setSingleGame(data)
        console.log(data.id)
        getTrailers({ id: data.id })
        getScreenShots({ id: data.id })
      }
    }
    getSingleGame({ slug })
  }, [slug])

  const getTrailers = async ({ id }) => {
    try {
      const res = await fetch(`${API.SECTION.GAMES}/${id}/movies?${API.API_KEY}`)
      if (!res.ok) throw new Error('no se pudieron descargar los trailers')
      const { results } = await res.json()

      if (results) setTrailers(results)
    } catch (error) {

    }
  }
  const getScreenShots = async ({ id }) => {
    try {
      const res = await fetch(`${API.SECTION.GAMES}/${id}/screenshots?${API.API_KEY}`)
      if (!res.ok) throw new Error('no se pudieron descargar los trailers')
      const { results } = await res.json()

      if (results) setScreenShots(results)
    } catch (error) {

    }
  }
  return (
    { singleGame, trailers, screenShots }
  )
}

export default useSingleGame
