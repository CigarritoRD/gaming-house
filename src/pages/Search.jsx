import React from 'react'
import { useParams } from 'react-router-dom'
import useGames from '../hooks/use-games'
import { Bars } from 'react-loader-spinner'
import { GameList } from '../components/list-of-games'

const Search = () => {
  const { query } = useParams()
  const { games, loading } = useGames({ search: query })

  return (

    <div className='h-full rounded-3xl w-full overflow-y-scroll flex flex-col gap-4 p-4 scrollbar'>
      {loading
        ? <div className='flex justify-center h-full items-center'>
          <Bars
            height="120"
            width="120"
            color="#fff"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
        : <GameList games={games} />}

    </div >

  )
}

export default Search
