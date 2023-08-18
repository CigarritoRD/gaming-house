import { API } from '../constants/url'

export const getScreenShots = async ({ id }) => {
  try {
    const res = await fetch(`${API.SECTION.GAMES}/${id}/screenshots?${API.API_KEY}`)
    if (!res.ok) throw new Error('no se pudieron descargar los trailers')
    const { results } = await res.json()
    if (results) return results
  } catch (error) {
    console.log(error)
  }
}
