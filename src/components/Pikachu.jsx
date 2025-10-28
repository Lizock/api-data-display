
export default function Pikachu({ data }) {
  return (
    <div className = "PikaStats">
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
    </div>
  )
}
