import { useEffect, useState } from 'react'
import { getTrailers } from '../services/getTrailers'
import { getScreenShots } from '../services/getScreenShots'
import { singleGame as getGame } from '../services/singleGame.js'
const useSingleGame = ({ slug }) => {
  const [singleGame, setSingleGame] = useState({})
  const [trailers, setTrailers] = useState()
  const [screenShots, setScreenShots] = useState([])

  useEffect(() => {
    if (slug === '') return
    const getSingleGame = async ({ slug }) => {
      const data = await getGame(slug)
      if (data) {
        setSingleGame(data)
        const trailer = await getTrailers({ id: data.id })
        const screenshot = await getScreenShots({ id: data.id })
        setScreenShots(screenshot)
        setTrailers(trailer)
      }
    }
    getSingleGame({ slug })
  }, [slug])

  return (
    { singleGame, trailers, screenShots }
  )
}

export default useSingleGame
