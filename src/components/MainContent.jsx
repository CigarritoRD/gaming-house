
import { useEffect, useState } from 'react'
import useGames from '../hooks/useGames'

const MainContent = ({ getSingleGame }) => {
  const { games } = useGames()
  const [portada, setPortada] = useState({})

  useEffect(() => {
    const portadaChanger = setTimeout(() => {
      const portadaAleatoria = Math.floor(Math.random() * games.length)
      const portada = games.map(game => {
        return { imagen: game.background_image, titulo: game.name }
      })
      setPortada(portada[portadaAleatoria])
    }, 5000)
    return () => clearTimeout(portadaChanger)
  }, [portada])

  return (
    <div className='h-full rounded-3xl w-full overflow-y-scroll flex flex-col gap-4 p-4 scrollbar'>
      <div className='rounded-3xl bg-slate-950 h-[400px] overflow-hidden relative '>

        <div className=' absolute inset-0  flex justify-end items-end p-8'>

          <h2 className=' bg-black/60 text-4xl py-1 px-6 text-slate-200 font-bold'>{portada?.titulo}</h2>
        </div>
        <img className='w-full rounded-3xl h-[400px] object-cover object-top' src={portada?.imagen} alt="" />
      </div>
      <div className=''>
        <ul className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>{games.length && games.map(game => {
          return (
            <li key={game?.id} onClick={() => getSingleGame(game?.id)} className='hover:scale-[103%] duration-200 bg-slate-800 cursor-pointer h-fit w-full min-w-[300px] overflow-hidden rounded-3xl flex flex-col justify-between shadow-md'>
              <div className='overflow-hidden '>
                <img className='w-full min-h-[200px] h-[200px] object-cover' src={game?.background_image} alt="" />
              </div>
              <div className='p-4 flex flex-col gap-2 text-lg justify-between '>
                <h3 className='text-3xl font-bold text-slate-200'>{game?.name}</h3>
                <div className='flex flex-col gap-1 justify-between h-full'>
                  <p className='text-slate-300  flex justify-between items-center'>Votos totales: <span>  {game.ratings_count}</span></p>
                  <p className='text-slate-300 flex justify-between items-center'>MetaScore:  <span className='text-lg border py-1 px-2 rounded-md border-green-600'>{game.metacritic}</span> </p>
                  <p className='text-slate-300 flex justify-between items-center'>Estreno: <span>{game.released}</span></p>
                  <p className='text-slate-300 flex justify-between items-center'>Apreciacion: <span className='capitalize px-4 py-1 rounded-full text-lg bg-green-600 text-green-900 font-bold'>{game?.ratings[0].title}</span></p>
                </div>
              </div>
            </li>
          )
        })}</ul>
      </div>
    </div >
  )
}

export default MainContent
