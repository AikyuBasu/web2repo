const listOfMovies = [];

// returns !!

function addMovie(movie){
    listOfMovies.push(movie);
}

function allMovies(){
    return listOfMovies;
}

export { addMovie, allMovies };