import React from 'react'
import { Link } from 'react-router-dom'
const APRECIACION = {
  EXPECIONAL: 'exceptional',
  RECOMENDED: 'recommended'
}
const GameListItem = ({ game }) => {
  const apresiation = ({ apreciacion }) => {
    if (!apreciacion) return null
    if (apreciacion === APRECIACION.EXPECIONAL) return 'bg-yellow-600 text-yellow-900'
    if (apreciacion === APRECIACION.RECOMENDED) return 'bg-green-600 text-green-900'
  }
  const classNameApreciation = `${apresiation({ apreciacion: game?.ratings[0]?.title })} px-4 capitalize rounded-lg font-medium text-sm` ?? ''
  return (
    <li key={game?.id} className=' border border-slate-700 overflow-hidden hover:scale-[103%] duration-200 bg-slate-800 cursor-pointer aspect-[auto] w-full min-w-[300px] rounded-3xl shadow-md'>
      <Link to={`/games/detail/${game?.slug}`} className='flex lg:flex-col h-[130px] lg:h-auto' >
        <img className='w-[100px] h-full lg:w-full lg:h-[200px] object-cover' src={game?.background_image} alt="" loading='lazy' />
        <div className=' flex flex-col w-full p-2'>
          <h3 className='lg:text-2xl font-bold text-slate-200 lg:min-h-[65px]'>{game?.name}</h3>
          <div className=' flex flex-col gap-1 lg:gap-2 lg:p-2'>
            <p className='text-slate-300 hidden text-sm lg:text-lg lg:flex justify-between items-center'>Votos totales: <span>  {game.ratings_count}</span></p>
            <p className='text-slate-300 flex  text-sm lg:text-lg justify-between items-center'>MetaScore:  <span className=' border py-1 px-2 rounded-md border-green-600'>{game.metacritic}</span> </p>
            <p className='text-slate-300 flex text-sm lg:text-lg  justify-between items-center'>Estreno: <span>{game.released}</span></p>
            <p className='text-slate-300 flex  text-sm lg:text-lg justify-between items-center'>Apreciacion: <span className={classNameApreciation}>{game?.ratings[0]?.title ?? 'none'}</span></p>
          </div>
        </div>
      </Link>
    </li>)
}

export default GameListItem
