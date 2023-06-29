import { toast } from 'react-toastify';
import './ReviewsList';
import axios from 'axios';
import { API_URL } from '../../Config/Config';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ReviewsList = () => {

  const [reviews, setReviews] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/reviews?_expand=author`)
      .then(res => setReviews(res.data))
      .catch(res => toast.error(res.message));
  }, []);


  if (!reviews) {
    return '';
  }

  return (
    
      <ul>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <li key={review.id}><NavLink to={`../reviews/${review.id}`} >by {review.title}</NavLink></li>
        ))
      ) : (
        <h2>There are no reviews on your list</h2>
      )}
      </ul>
   
  );

}
export default ReviewsList;