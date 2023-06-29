import React, { useEffect, useState } from 'react';
import './MoviesList.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../../Config/Config';
import Card from '../../Core/Card/Card';
import MovieItem from '../MovieItem/MovieItem';


const MoviesList = () => {
  const [movies, setMovie] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/movies`)
      .then(res => setMovie(res.data))
      .catch(res => toast.error(res.message));
  }, []);


  if (!movies) {
    return '';
  }

  return (
    <div className="row g movies__list">
      {movies.length > 0 ? (
        movies.map(movie => (
          <div key={movie.id} className="col-sm-12 col-md-6 col-lg-4 gx-5">
            <Card
              movie={movie}
              showEdit={true}
              showDelete={true}
            />
          </div>
        ))
      ) : (
        <h2>There are no movies on your list</h2>
      )}
    </div>
  );
};

export default MoviesList;
