export default function Games({ games }) {
  const uniqueGames = [...new Set(games.map(g => g.version.name))];

  return (
    <div className = "Games">
      <h4> Pikachu appears in these games:</h4>
      <ul>
        {uniqueGames.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  )
}
