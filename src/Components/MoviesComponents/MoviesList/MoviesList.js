import { useEffect, useState } from 'react';
import './MoviesList.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../../Config/Config';
import Card from '../../Core/Card/Card';
import MovieItem from '../MovieItem/MovieItem';
const MoviesList = () => {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/movies`)
      .then(res => setMovies(res.data))
      .catch(res => toast.error(res.message))
      
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  if(!movies) {
    return "";
  }

 
    return (
      <div className="row g movies__list">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="col-sm-12 col-md-6 col-lg-4 gx-5">
              <Card key={movie.id} img={movie.image} title={movie.title} year={movie.year} id={movie.id} showEdit={true} showDelete={true} onClick={() => handleMovieClick(movie)}/>
            </div>
          ))
        ) : (
          <h2>There are no movies on your list</h2>
        )}
      </div>
    );
  };

export default MoviesList;