import { API } from '../constants/url'

export async function getGames ({ query = '', type = '' }) {
  try {
    const url = type && query
      ? `${API.SECTION.GAMES}?${API.API_KEY}&${type}=${query.toLowerCase()}`
      : `${API.SECTION.GAMES}?${API.API_KEY}`
    const res = await fetch(url)
    if (!res.ok) throw new Error('error del servidor')
    const data = await res.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}
