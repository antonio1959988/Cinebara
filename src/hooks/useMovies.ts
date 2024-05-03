import axios from "axios";
import { z } from 'zod'
import { useState } from "react";

const Movie = z.array(
    z.object({
        adult: z.boolean(),
        id: z.number(),
        overview: z.string(),
        poster_path: z.number(),
        release_date: z.string(),
        title: z.string(),
        video: z.boolean(),
        vote_count: z.number(),
        category: z.number()
    })
)

export type Movie = z.infer<typeof Movie>

export default function useMovies() {
    const [movies, setMovies] = useState<Movie>([
        {
            adult: false,
            id: 0,
            overview: "",
            poster_path: 0,
            release_date: '',
            title: '',
            video: false,
            vote_count: 0,
            category: 0
        }
    ])

    const fetchMovies = async() => {
        const api_key = import.meta.env.VITE_API_KEY
        try {
            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-MX&page=1%27`;
    
            const {data} = await axios(url)
    
            // Si existe
            if(!data){
                return
            }
    
    
                setMovies(data.results)
      
    
        } catch (error) {
            console.log('error', error)
        }
    }



    return{
        movies,
        fetchMovies
    }
}