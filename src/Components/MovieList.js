import MovieItem from "./MovieItem";


const MovieList=({movies})=>{
    
    return(

        <div className="container-fluid">
            <h2>Movies</h2>
            <div className="row">
                {movies.map((movie)=>(
                        <MovieItem key={movie.imdbID} movie={movie} />
                    )
                    )};
            </div>
        </div>
    );
}

export default MovieList;