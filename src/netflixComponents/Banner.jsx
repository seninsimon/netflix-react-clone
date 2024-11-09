import React, { useEffect, useState } from 'react';
import axiosinstance from '../axios';
import requests from '../request';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

  // Fetching a random movie to display in the banner
  useEffect(() => {
    async function fetchData() {
      const request = await axiosinstance.get(requests.actionMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  // Function to fetch trailer based on movie ID
  const fetchTrailer = async (movieId) => {
    try {
      const response = await axiosinstance.get(
        `/movie/${movieId}/videos?api_key=1207c9943a2cfe7e63443aa1e4804410`
      );
      const trailers = response.data.results;
      const trailer = trailers.find((video) => video.type === 'Trailer');
      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1`);
      } else {
        console.log('Trailer not available');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  // Handler for "Play" button click
  const handlePlayClick = () => {
    if (movie?.id) {
      fetchTrailer(movie.id);
    }
  };

  return (
    <header
      className='Banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("${imgBaseUrl}${movie?.backdrop_path}")`,
        backgroundPosition: 'center',
      }}
    >
      <div className="banner-contents">
        <h1 className='heading'>
          {movie?.title || movie?.original_name || movie?.name}
        </h1>

        <h2 className='info truncate'>{movie?.overview || 'Loading ...'}</h2>

        <div className="banner-buttons">
          <button className='banner-button' onClick={handlePlayClick}>
            Play
          </button>
          <button className='banner-button2'>More Info</button>
        </div>
      </div>

      <div className='div-gradient'></div>

      {/* Trailer Modal */}
      {trailerUrl && (
        <div className="modal">
          <span className="close" onClick={() => setTrailerUrl('')}>&times;</span>
          <iframe
            width="100%"
            height="500"
            src={trailerUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Trailer"
          ></iframe>
        </div>
      )}
    </header>
  );
};

export default Banner;
