import { useEffect, useState } from 'react';
import './CommentsList.scss';
import axios from 'axios';
import { API_URL } from '../../Config/Config';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

const CommentsList = () => {

  const [comments, setComments] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/comments`)
      .then(res => setComments(res.data))
      .catch(res => toast.error(res.message));
  }, []);


  if (!comments) {
    return '';
  }

  return (
    
    <ul>
    {comments.length > 0 ? (
      comments.map((comment, index) => (
        <li key={index}><NavLink to={`../comments/${comment.id}`} >by {comment.username}</NavLink></li>
      ))
    ) : (
      <h2>There are no comment on your list</h2>
    )}
    </ul>
    );

}
export default CommentsList;