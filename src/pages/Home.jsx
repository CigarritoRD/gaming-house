
import useGames from '../hooks/use-games'
import { GameList } from '../components/list-of-games'
import Portada from '../components/hero'

const Home = () => {
  const { games, getMoreGames, portada, nextPage } = useGames({})

  const handleclick = () => {
    getMoreGames({ url: nextPage.current })
  }

  return (
    <div className='h-full rounded-xl w-full overflow-y-scroll flex flex-col gap-4 md:p-4 scrollbar'>
      {games.length > 0 &&
        (
          <>
            <Portada portada={portada} />
            <GameList games={games}
              getMoreGames={handleclick}
              url={nextPage.current} />
          </>
        )
      }

    </div >

  )
}
export default Home
