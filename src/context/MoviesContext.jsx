import { createContext, useContext, useEffect, useState } from "react";


const apiKey = import.meta.env.VITE_IMDB_API_KEY;
const MoviesContext = createContext();

export const useMovies = () => {
  return useContext(MoviesContext);
};

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    fetch("https://imdb-top-100-movies.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));

  }, [])

  console.log(movies)
  return <MoviesContext.Provider value={{movies}}>
      {children}
    </MoviesContext.Provider>
  
}
