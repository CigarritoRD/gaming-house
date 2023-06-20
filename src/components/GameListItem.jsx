import React from 'react'
import { Link } from 'react-router-dom'

const GameListItem = ({ game }) => {
  return (
    <li key={game?.id} className='hover:scale-[103%] duration-200 bg-slate-800 cursor-pointer h-fit w-full min-w-[250px] overflow-hidden rounded-3xl flex flex-col justify-between shadow-md'>
      <Link to={`/games/detail/${game?.slug}`} ><div className='overflow-hidden '>
        <img className='w-full min-h-[200px] h-[200px] object-cover' src={game?.background_image} alt="" loading='lazy' />
      </div>
        <div className='p-4 flex flex-col gap-2 justify-between '>
          <h3 className='text-2xl font-bold text-slate-200'>{game?.name}</h3>
          <div className='flex flex-col gap-1 justify-between h-full'>
            <p className='text-slate-300  flex justify-between items-center'>Votos totales: <span>  {game.ratings_count}</span></p>
            <p className='text-slate-300 flex justify-between items-center'>MetaScore:  <span className=' border py-1 px-2 rounded-md border-green-600'>{game.metacritic}</span> </p>
            <p className='text-slate-300 flex justify-between items-center'>Estreno: <span>{game.released}</span></p>
            <p className='text-slate-300 flex justify-between items-center'>Apreciacion: <span className='capitalize px-4  rounded-full bg-green-600 text-green-900 '>{game?.ratings[0]?.title ?? 'none'}</span></p>
          </div>
        </div>
      </Link>
    </li>)
}

export default GameListItem
