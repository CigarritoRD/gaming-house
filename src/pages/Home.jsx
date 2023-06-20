import { useEffect, useRef, useState } from 'react'
import useGames from '../hooks/useGames'
import { GameList } from '../components/GamesList'

const Home = () => {
  const { games, getMoreGames, page } = useGames({})
  const [portada, setPortada] = useState({})
  const portadaInicial = useRef({ name: '', imagen: '' })

  useEffect(() => {
    if (!portadaInicial.current.name && games.length > 0) {
      portadaInicial.current = { name: 'hola', imagen: games[0]?.background_image }
      setPortada(portadaInicial.current)
    }
    const portadaChanger = setTimeout(() => {
      const portadaAleatoria = Math.floor(Math.random() * games.length)
      const portada = games.map(game => {
        return { imagen: game.background_image, titulo: game.name }
      })
      setPortada(portada[portadaAleatoria])
    }, 5000)
    return () => clearTimeout(portadaChanger)
  }, [games, portada])

  const handleclick = () => {
    getMoreGames({ url: page })
  }

  return (
    <div className='h-full rounded-3xl w-full overflow-y-scroll flex flex-col gap-4 p-4 scrollbar'>
      <div className='rounded-3xl bg-slate-950 min-h-[400px] xl:min-h-[400px] overflow-hidden relative '>

        <div className=' absolute inset-0  flex justify-end items-end p-8'>

          <h2 className=' bg-black/60 text-4xl py-1 px-6 text-slate-200 font-bold'>{portada?.titulo}</h2>
        </div>
        <img className='w-full rounded-3xl h-full object-cover object-top' src={portada?.imagen} alt="" loading='lazy' />
      </div>
      <GameList games={games} getMoreGames={handleclick} />

    </div >
  )
}
export default Home
