
import { useParams } from 'react-router-dom'
import { GameList } from '../components/list-of-games'
import useGames from '../hooks/use-games'
import { Bars } from 'react-loader-spinner'

const Games = () => {
  const { name } = useParams()
  const { games, error, getMoreGames, page } = useGames({ platformOrGenres: name })
  const isLoading = !!(games.length === 0 && !error)

  const handleclick = () => {
    getMoreGames({ url: page })
  }
  return (

    <div className='h-full rounded-3xl w-full overflow-y-scroll flex flex-col gap-4 p-4 scrollbar'>
      {isLoading &&
        <div className='flex justify-center h-full items-center'>
          <Bars
            height="120"
            width="120"
            color="#fff"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>}
      {games.length > 0 && <GameList games={games} getMoreGames={handleclick} />}

    </div >

  )
}

export default Games
