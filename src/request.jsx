const API_KEY = "1207c9943a2cfe7e63443aa1e4804410";

const requests = {
  fetchTrending: `trending/movie/day?api_key=${API_KEY}`,
  netflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `movie/top_rated?api_key=${API_KEY}`,
  actionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests
