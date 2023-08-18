import { API } from '../constants/url'

export const getTrailers = async ({ id }) => {
  try {
    const res = await fetch(`${API.SECTION.GAMES}/${id}/movies?${API.API_KEY}`)
    if (!res.ok) throw new Error('no se pudieron descargar los trailers')
    const { results } = await res.json()
    if (results) return results
  } catch (error) {
    console.log(error)
  }
}
