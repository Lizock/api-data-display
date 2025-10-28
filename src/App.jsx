import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Moves from "./components/Moves.jsx";
import Games from "./components/Games.jsx"
import Pikachu from "./components/Pikachu.jsx";

export default function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        if (!response.ok) throw new Error("No/Wrong Network response")
        const json = await response.json()
        setData(json)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Loading data...</p>
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>

  return (
    <div>
      <Header />

      <Pikachu data={data} />
      <Games games={data.game_indices} />
      <h4>Moves:</h4>
      <Moves moves={data.moves} />

       <Footer />
    </div>
  )
}
