

import { useEffect } from "react"
import Header from "./components/Header"
//import Navbar from "./components/Navbar"
import ScrollContent from "./components/ScrollContent"
//import { useEffect } from "react"
//import useMovies from "./hooks/useMovies"
import { movies } from "./data"
import useMovies from "./hooks/useMovies"

function App() {

  //const {movies, fetchMovies} = useMovies()



// useEffect(() => {
//   fetchMovies()
// }, [])


  return (
    <>
    {/* <Navbar/> */}
    <Header/>
<ScrollContent movies={movies} title="Nuestros Estrenos" category={1}/>
<ScrollContent movies={movies} title="Catálogo Base" category={2}/>
<ScrollContent movies={movies} title="Animación" category={3}/>
<ScrollContent movies={movies} title="Terror" category={4}/>
<ScrollContent movies={movies} title="Cine Mexicano" category={5}/>
    </>
  )
}

export default App
