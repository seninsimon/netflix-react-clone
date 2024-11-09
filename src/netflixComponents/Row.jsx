import React, { useEffect, useState } from 'react';
import axiosinstance from '../axios';
import './Row.css';

function Row({ title, fetchUrl, isLargerow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const imgbaseurl = "https://image.tmdb.org/t/p/original/";

  // Fetching movies on component mount
  useEffect(() => {
    async function fetchData() {
      const request = await axiosinstance.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  // Function to fetch trailer and open modal
  const trailerclick = async (movie) => {
    if (!movie.id) {
      console.error("Movie ID not found:", movie);
      return;
    }

    try {
      const isTVShow = fetchUrl.includes('tv');
      const endpoint = isTVShow ? 'tv' : 'movie';

      const response = await axiosinstance.get(
        `/${endpoint}/${movie.id}/videos?api_key=1207c9943a2cfe7e63443aa1e4804410`
      );
      const trailers = response.data.results;
      const trailer = trailers.find((video) => video.type === 'Trailer');

      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1`);
        setShowModal(true);
      } else {
        console.log('Trailer not available');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setTrailerUrl(''); // Clear trailer URL when closing the modal
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((img) => (
          <img
            key={img.id || img.movie_id || img.show_id}
            onClick={() => trailerclick(img)}
            title={img.title || img.name}
            className={isLargerow ? "big_row_poster" : "row__poster"}
            src={`${imgbaseurl}${isLargerow ? img.poster_path : img.backdrop_path}`}
            alt={img.name || img.title}
          />
        ))}
      </div>

      {/* Modal for Trailer */}
      {showModal && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <iframe
            width="100%"
            height="100%"
            src={trailerUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Trailer"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Row;
