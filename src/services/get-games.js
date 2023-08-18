
export async function getGames ({ url }) {
  console.log(url)
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('error del servidor')
    const data = await res.json()
    const AdaptedData = data.results.map(game => {
      return {
        id: game.id,
        slug: game.slug,
        name: game.name,
        released: game.released,
        background_image: game.background_image,
        ratings: game.ratings,
        ratings_count: game.ratings_count,
        metacritic: game.metacritic,
        platforms: game.platforms,
        parent_platforms: game.parent_platforms,
        genres: game.genres,
        stores: game.stores
      }
    })
    return {
      count: data.count,
      next: data.next,
      prevous: data.previous,
      results: AdaptedData
    }
  } catch (error) {
    console.log(error)
  }
}
