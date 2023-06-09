
import { Bars } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import { GameList } from '../components/GamesList'
import { useDiscoverGames } from '../hooks/useDiscoverGames'

const DiscoverType = () => {
  const { type } = useParams()
  const { games, isLoading, getType, next } = useDiscoverGames({ type })
  const handleClick = () => {
    getType(next)
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
      {!isLoading && games.length > 0 && <GameList games={games} getMoreGames={handleClick} />}

    </div >
  )
}

export default DiscoverType
