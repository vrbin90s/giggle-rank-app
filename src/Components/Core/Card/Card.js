import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.scss';

const Card = ({ movie, showEdit, showDelete }) => {

  const { id, image, title, year } = movie;
  


  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card-columns card__custom">
        <img className="card__image" src={ image } alt={ title } />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6>{ year }</h6>
        </div>
        <div className="card-footer card__custom--footer">
        <NavLink className="btn btn-info card__button" to={`/movies/${id}`}>
            Giggle Reviews
          </NavLink>
          {showEdit && (
            <NavLink className="btn btn-warning card__button" to={`/movie/edit/${ id }`}>
              Edit
            </NavLink>
          )}
          {showDelete && (
            <NavLink className="btn btn-danger card__button" to={`/movie/delete/${ id }`}>
              Delete
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
