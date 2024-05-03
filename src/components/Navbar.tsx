
export default function Header() {
  return (
    <>
        <div className="flex text-xl text-white  flex-row justify-between p-5">
            <div className="">
                {/* logo */}
            </div>
        <ul className=" justify-center gap-10   hidden sm:flex sm:flex-row">
            <li>Inicio</li>
            <li>Peliculas</li>
            <li>Series</li>
            <li>Generos</li>
        </ul>
        <div className="">
           {/* Busqueda */}
        </div>
        </div>
    </>
  )
}
