import Container from '../../Core/Container/Container';
import './MovieItem.scss';
const MovieItem = ({movie}) => {
  return (
    <Container>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h1>{movie.title}</h1>
        </div>
        <div className="col-sm-12 col-md-6">

        </div>
      </div>
    </Container>
  )
}
export default MovieItem;