import { API } from '../constants/url'

export async function getGames (id) {
  try {
    const url = id
      ? `${API.SECTION.GAMES}?${API.API_KEY}${typeof id === 'number' ? `&platforms=${id}` : `&genres=${id}`.toLowerCase()}`
      : `${API.SECTION.GAMES}?${API.API_KEY}`
    const res = await fetch(url)
    if (!res.ok) throw new Error('error del servidor')
    const data = await res.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}
