
import GameListItem from './GameListItem'

export function GameList ({ games, getMoreGames }) {
  return (<>
    <ul className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>

      {games.map(game => (
        <GameListItem key={game.id} game={game} />

      ))}
    </ul>
    <button onClick={getMoreGames} className='border w-full md:w-fit px-8 mx-auto hover:bg-slate-600 duration-150 p-4 text-slate-100 text-lg rounded-xl bg-slate-700'>Cargar mas...</button>
  </>
  )
}
