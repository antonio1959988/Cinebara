
import {MovieType} from '../types'
import  Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ScrollContentType = {
  movies : MovieType[]
  title: string
  category: number
}

export default function ScrollContent({movies, title, category} : ScrollContentType) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <div className="relative z-10 mx-auto overflow-hidden sm:overflow-visible sm:max-w-[590px] md:max-w-[720px] lg:max-w-[980px] xl:max-w-[1400px]">
      <h2 className="px-4 mt-8 font-bold py-4 text-lg md:text-xl">{title}</h2>
    

      <div className="slider-container">
      <Slider {...settings}>

        {movies.filter(movie => movie.category === category).map(movie => 
            <a href={`/pelicula/${movie.id}`} target='_self' className='px-2 max-w-[200px] relative'>
              <p className='absolute min-h-[238px] hover:bg-opacity-80  max-w-[160px] px-4 text-sm leading-5 py-3 hover:bg-yellow-950 transition duration-300 z-20 text-transparent hover:text-orange-100'>
                  <h1 className='text-base font-bold leading-5 line-clamp-2 mb-2'>{movie.title}</h1>
                  <span className=' line-clamp-[8]'>{movie.overview}</span>
              </p>
              <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=''/>
              
            </a>
        )}
      </Slider>
    </div>

    </div>
  )
}
