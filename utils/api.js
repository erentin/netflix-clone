const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWUzMTUzMmQ1NmMxYTAxZjJlMWU2YTVlOWMwYzZmZiIsInN1YiI6IjY1YmI0NjI5MTFjMDY2MDBlNWNlZjNiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t2sMR8XZ6F8d_s5jMTJ7zQig0nStHSBOAzxWw-Y8wjU'
  }
};
  

const fetchPopularMovies = async () => {
    
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options);
        const data = await response.json();
        const firstFiveMovies = data.results.slice(0, 5);

        return firstFiveMovies;
      } catch (error) {
        console.error("Error fetching movie list:", error);
        throw error; // Hata durumunda hatayı fırlat
      }
    
}

const fetchTopRatedMovies = async () => {
    
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
        const data = await response.json();
        const firstFiveMovies = data.results.slice(0, 5);

        return firstFiveMovies;
      } catch (error) {
        console.error("Error fetching movie list:", error);
        throw error; // Hata durumunda hatayı fırlat
      }
    
}

const fetchUpcomingMovies = async () => {
    
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
        const data = await response.json();
        const firstFiveMovies = data.results.slice(0, 5);

        return firstFiveMovies;
      } catch (error) {
        console.error("Error fetching movie list:", error);
        throw error; // Hata durumunda hatayı fırlat
      }
    
}

const fetchMovieDetail = async (movie_id) => {
    
  try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, options);
      const movieDetail = await response.json();
      return movieDetail;

    } catch (error) {
      console.error("Error fetching movie list:", error);
      throw error; // Hata durumunda hatayı fırlat
    }
  
}

export  { 
          fetchPopularMovies,
          fetchTopRatedMovies,
          fetchUpcomingMovies,
          fetchMovieDetail
        }