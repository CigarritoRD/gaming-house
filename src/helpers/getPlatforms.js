import { API, API_URL } from '../constants/url'

export const getPlatforms = async () => {
  const url = `${API_URL}platforms?${API.API_KEY}`
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('error al encontrar los generos')
    const { results } = await res.json()
    return results
  } catch (error) {
    console.log(error)
  }
}
