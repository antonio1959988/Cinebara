
import {MovieType} from '../types'
import { Slider } from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ScrollContentType = {
  movies : MovieType[]
  title: string
}

export default function ScrollContent({movies, title} : ScrollContentType) {

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
      <h2 className="px-4 mt-8 font-semibold py-4 text-lg">{title}</h2>
    

      <div className="slider-container">
      <Slider {...settings}>

        {movies.map(movie => <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='max-w-[200px] px-2'/>)}
      </Slider>
    </div>

    </div>
  )
}


/*

<div className="flex gap-2 justify-center overflow-x-scroll">
        {movies.map(movie => <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=' max-w-[200px]'></img>)}
      </div>
*/