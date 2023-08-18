import { useEffect, useRef } from 'react'
import GameCard from './game-card'

export function GameList ({ games, getMoreGames, url }) {
  const observerdRef = useRef(null)
  const rootRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entrie]) => {
      if (entrie.isIntersecting) getMoreGames({ url })
    })
    observerdRef.current && observer.observe(observerdRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <ul
        ref={rootRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '14px'
        }}>
        {games.map(game => (
          <GameCard key={game.id}
            game={game}
          />
        ))}
      </ul>
      {games.length > 0 && <button
        ref={observerdRef}
        onClick={getMoreGames}
        className='border w-full md:w-fit px-8 mx-auto hover:bg-slate-600 duration-150 p-4 text-slate-100 text-lg rounded-xl bg-slate-700'>Cargando mas...
      </button>}
    </>
  )
}
