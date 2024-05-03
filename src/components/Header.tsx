import { movies } from "../data"
export default function Header() {
    return (
        <>

            <div className="text-center">
                {/* <img src="https://www.filmin.es/assets/img/instances/es/subscribe/custom-highlighted-background-image-mobile.jpg?v=2024-03-26" className="absolute w-full z-0" /> */}
                <div className="relative space-y-5 z-10 px-5">
                    <div className="text-3xl sm:text-4xl md:text-6xl pb-2 pt-4  font-extrabold">
                        Hemos venido a servir cine
                    </div>
                    <div className=" text-xl ">
                        Con nuestro extenso catálogo, descubrirás obras maestras, clásicos, cine independiente, series exclusivas, documentales y mucho más al precio más accesible posible. 
                    </div>
                    <div className="text-lg px-12">
                        ¡La mejor calidad del momento! ¡Sin anuncios ni publicidad!
                    </div>
                    <form className=" items-center flex flex-col md:flex-row md:justify-center md:items-center md:gap-2">

                        <input type="text" placeholder="¿Que título estas buscando?" className="w-72 h-12 border-[2px] border-yellow-950 bg-white placeholder:text-yellow-950 px-4 mb-4 md:mb-0"/>

                        <input type="button" className="px-6 bg-yellow-950 w-36 h-12 font-extrabold uppercase text-white" value="Buscar" />
                    </form>

                    <div className="text-black md:text-2xl font-semibold">
                        Más de {movies.length} películas y series. Proximamente muchas más....
                    </div>
                </div>
            </div>
        </>
    )
}
