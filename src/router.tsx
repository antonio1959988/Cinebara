
//import Navbar from "./components/Navbar"
//import { useEffect } from "react"
//import useMovies from "./hooks/useMovies"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import { Suspense, lazy } from "react"
import Spinner from "./components/Spinner/Spinner"

// Performance
const IndexPage = lazy(() => import("./views/IndexPage"))
const DetailPage = lazy(() => import("./views/DetailPage"))

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
            <Suspense fallback={<Spinner/>}>
            <IndexPage />
          </Suspense>
          } index />
          <Route path='/pelicula/:id' element={
            <Suspense fallback={<Spinner/>}>
              <DetailPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
