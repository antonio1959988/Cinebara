
//import Navbar from "./components/Navbar"
//import { useEffect } from "react"
//import useMovies from "./hooks/useMovies"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import IndexPage from "./views/IndexPage"
import DetailPage from "./views/DetailPage"

// Performance


function App() {

  //const {movies, fetchMovies} = useMovies()



// useEffect(() => {
//   fetchMovies()
// }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={
            <IndexPage />
          } index />
          <Route path='/pelicula' element={
              <DetailPage />
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
