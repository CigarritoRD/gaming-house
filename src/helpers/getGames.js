
export async function getGames ({ url }) {
  try {
    console.log(url)
    const res = await fetch(url)
    if (!res.ok) throw new Error('error del servidor')
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
