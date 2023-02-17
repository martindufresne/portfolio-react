import React, { useState, useEffect } from 'react';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [showAllMovies, setShowAllMovies] = useState(false);
  const imgDefaultUrl = "https://image.tmdb.org/t/p/w200"

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6ac1e3f9caf32f53c1769ed656dbedd8');
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (showAllMovies) {
      setDisplayedMovies(movies);
    } else {
      setDisplayedMovies(movies.slice(0, 5));
    }
  }, [movies, showAllMovies]);

  const handleToggleMovies = () => {
    setShowAllMovies(!showAllMovies);
  };

  return (
    <div>
      <h2>Films les plus populaires</h2>
      <button onClick={handleToggleMovies}>
        {showAllMovies ? 'Afficher moins de films' : 'Afficher plus de films'}
      </button>
      <ul>
        {displayedMovies.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <p>
              <img src={imgDefaultUrl + movie.poster_path} alt="" />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;