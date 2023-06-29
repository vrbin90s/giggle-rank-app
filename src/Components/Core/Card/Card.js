import { NavLink } from 'react-router-dom';
import './Card.scss';
const Card = (props) => {
  const { img, title, year, id, showEdit, showDelete, onClick } = props;
  
  return(
    <div className="col-sm-12 col-md-6 col-lg-4">
    <div className="card card__custom">
      <img className="card__image" src={img} alt={title}></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6>{ year }</h6>

        </div>
        <div className="card-footer card__custom--footer">
          <NavLink className="btn btn-info card__button" to={`/movie/${id}/review`}>Giggle Reviews</NavLink>
          {showEdit && <NavLink className="btn btn-warning card__button" to={`/movie/edit/${id}`}>Edit</NavLink>}
          {showDelete && <NavLink className="btn btn-danger card__button" to={`/movie/delete/${id}`}>Delete</NavLink>}
        </div>
      </div>
  </div>
  )
}
export default Card;