import {MovieType} from '../types'

type ScrollContentType = {
  movies : MovieType[]
  title: string
}

export default function ScrollContent({movies, title} : ScrollContentType) {

  return (
    <div className="relative z-10">
      <h2 className="px-4 mt-8 font-semibold py-4 text-lg">{title}</h2>

      <div className="flex gap-2 justify-center overflow-x-scroll">
        {movies.map(movie => <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=' max-w-[200px]'></img>)}
      </div>
    </div>
  )
}
