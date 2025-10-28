
export default function Pikachu({ data }) {
  return (
    <div className = "PikaStats">
        <p>Height: 0.{data.height} m</p>
        <p>Weight: {data.weight} g</p>
    </div>
  )
}
