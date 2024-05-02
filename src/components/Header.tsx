
export default function Header() {
    return (
        <>

            <div className="text-center">
                <img src="https://www.filmin.es/assets/img/instances/es/subscribe/custom-highlighted-background-image-mobile.jpg?v=2024-03-26" className="absolute w-full z-0" />
                <div className="relative space-y-5 z-10 px-5">
                    <div className="text-4xl pb-2 pt-4  font-extrabold">
                        Hemos venido a servir cine
                    </div>
                    <div className=" text-xl ">
                        Con nuestra suscripción, descubre obras maestras, clásicos, cine independiente, series exclusivas, documentales y mucho más.
                    </div>
                    <div className="text-lg px-12">
                        Para iniciar tu suscripción, introduce tu email aquí
                    </div>
                    <form className=" items-center flex flex-col ">

                        <input type="text" placeholder="Tu email" className="w-72 h-12 border-[2px] border-[#6f6f81] bg-[#060613] placeholder:text-[#6f6f81] px-4 mb-4"/>

                        <input type="button" className="px-6 bg-[#02ffa1] w-36 h-12 font-extrabold uppercase text-[#060613]" value="Comenzar" />
                    </form>

                    <div className="text-[#6f6f81]">
                        Más de 10.000 películas y series. Cancela cuando quieras.
                    </div>
                </div>
            </div>
        </>
    )
}
