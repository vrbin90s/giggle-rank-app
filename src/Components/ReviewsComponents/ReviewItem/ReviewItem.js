import { NavLink } from 'react-router-dom';

import './ReviewItem.scss';
const ReviewItem = ({review}) => {

  const { title, body, author } = review;
  const authorName = author ? author.name : 'Unknown Author';
  const authorId = author ? author.id : null;


  return (
    <div className="row">
      <div className="coll-sm-12">
        <h2>{title}</h2>
          <p>{body}</p>
          <NavLink to={`../authors/${authorId}`} >by {authorName}</NavLink>
      </div>
    </div>
  )
}
export default ReviewItem;