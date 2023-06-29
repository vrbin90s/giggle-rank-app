import { NavLink } from 'react-router-dom';
import Container from '../../Core/Container/Container';
import './MovieItem.scss';


const MovieItem = ({ movie }) => {

  const { title, image, year, description, imdb } = movie;
  console.log(movie);
  return (
    <Container>
      <div className="row">
        <div className="col-sm-12 col-md-6 text-center">
          <div className="movie__cover">
            <h1 className='movie__cover--title'>{title}<span>&nbsp;({year})</span></h1>
            <img src={image} alt={title}></img>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="movie__info">
            <div className='movie__description'>
              <h2 className='movie__info--title'>About the movie</h2>
              <p>{ description }</p>
              <NavLink class="link" to={imdb}>Readmore on IMDB</NavLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default MovieItem;