
import { useParams } from 'react-router-dom'
import { GameList } from '../components/GamesList'
import useGames from '../hooks/useGames'
import { Bars } from 'react-loader-spinner'

const Games = () => {
  const params = useParams()

  const { games, error } = useGames(params)
  const isLoading = !!(games.length === 0 && !error)
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
      {games.length > 0 && <GameList games={games} />}

    </div >

  )
}

export default Games
