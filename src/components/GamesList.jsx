
import GameListItem from './GameListItem'

export function GameList ({ games }) {
  return (
    <ul className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>

      {games.map(game => (
        <GameListItem key={game.id} game={game} />
      ))}
    </ul>
  )
}
