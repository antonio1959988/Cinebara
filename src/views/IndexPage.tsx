import Header from "../components/Header";
import ScrollContent from "../components/ScrollContent";
import { movies } from "../data";

export default function IndexPage() {

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
