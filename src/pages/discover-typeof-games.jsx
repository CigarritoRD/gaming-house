
import { Bars } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import { GameList } from '../components/list-of-games'
import { useDiscoverGames } from '../hooks/use-discover-games'

const DiscoverType = () => {
  const { type } = useParams()
  const { games, isLoading, getType: getGamesbyType } = useDiscoverGames({ type })

  const goNextPage = () => {
    getGamesbyType()
  }
  return (

    <div className='h-full rounded-3xl w-full overflow-y-scroll flex flex-col gap-4 p-4 scrollbar'>

      {games.length > 0 && <GameList games={games} getMoreGames={goNextPage} />}
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

    </div >
  )
}

export default DiscoverType
