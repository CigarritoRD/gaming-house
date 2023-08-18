
import useGames from '../hooks/useGames'
import { GameList } from '../components/GamesList'
import Portada from '../components/Portada'

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
