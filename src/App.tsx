

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ScrollContent from "./components/ScrollContent"
import { useEffect } from "react"
import useMovies from "./hooks/useMovies"

function App() {

  const {movies, fetchMovies} = useMovies()



useEffect(() => {
  fetchMovies()
}, [])


  return (
    <>
    <Navbar/>
    <Header/>
<ScrollContent movies={movies} title="Nuestros Estrenos"/>
<ScrollContent movies={movies} title="Recientemente Añadido"/>
<ScrollContent movies={movies} title="Proximamente..."/>
    </>
  )
}

export default App
