export default function Moves({ moves }) {
  return (
    <ul>
      {moves.map((m, i) => (
        <li key={i}>{m.move.name}</li>
      ))}
    </ul>
  )
}
