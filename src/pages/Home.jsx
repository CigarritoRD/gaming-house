
import useGames from '../hooks/use-games'
import { GameList } from '../components/list-of-games'
import Portada from '../components/hero'

const Home = () => {
  const { games, getMoreGames, page, portada } = useGames({})

  const handleclick = () => {
    getMoreGames({ url: page })
  }

  return (
    <div className='h-full rounded-xl w-full overflow-y-scroll flex flex-col gap-4 md:p-4 scrollbar'>
      <Portada
        portada={portada}
      />
      <GameList
        games={games}
        getMoreGames={handleclick}
      />

    </div >
  )
}
export default Home
