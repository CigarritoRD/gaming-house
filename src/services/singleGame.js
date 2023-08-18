import { API } from '../constants/url'

export const singleGame = async (slug) => {
  const response = await fetch(`${API.SECTION.GAMES}/${slug}?${API.API_KEY}`)
  if (!response.ok) throw new Error('error al traer el juego')
  const json = await response.json()
  return json
}
