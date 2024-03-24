import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

const MovieApp=()=>{

    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movies,setMovies] = useState([]);

    const fetchMovies= async (searchTerm)=>{
        setLoading(true);
        setError(null);
        setMovies([]);

        try{
            const API_KEY = process.env.REACT_APP_API_KEY;
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
            
            if (response.data.Response === "True"){
                console.log (response.data);
                setMovies(response.data.Search);
            }
            else{
                console.log('Error received..', response.data.Error);
                setError(response.data.Error);
            }

        } catch(error){

            setError('An error occured while fetching the data', error);
        } finally{
            setLoading(false);
        }
    }

    return (
        <div>
            
            <SearchBar onSearch={fetchMovies}/>
            {loading && <p>Loading....</p>}
            {error && <p>{error}</p>}
            <MovieList movies={movies}/>

        </div>

    );
}

export default MovieApp;