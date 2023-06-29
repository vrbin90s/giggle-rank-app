import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieItem from "../../Components/MoviesComponents/MovieItem/MovieItem";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import axios from "axios";

const MoviePage = () => {
  const [movie, setMovie] = useState('');
  const { id } = useParams();

  useEffect(() => {

    axios.get(`${API_URL}/movies/${id}?_expand=author`)
        .then(res => setMovie(res.data))
        .catch(res => toast.error(res.message))
      }, [id])
      
      if (!movie) {
        return "";
      }

      return (
        <MovieItem movie={ movie } />
      )

}

export default MoviePage;