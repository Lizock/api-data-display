export default function Games({ games }) {
  const uniqueGames = [...new Set(games.map(g => g.version.name))];

  return (
    <div>
    <div className="gamesTitle">
    <h4> Pikachu appears in these games:</h4>
    </div>
    <div className = "Games">
      <ul>
        {uniqueGames.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
  </div>

  </div>
      
    
  )
}
