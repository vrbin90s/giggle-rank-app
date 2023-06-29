import { toast } from 'react-toastify';
import './CriticsList.scss';
import { API_URL } from '../../Config/Config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const CriticsList = () => {

  const [critics, setCritics] = useState('');

  useEffect(() => {

    axios.get(`${API_URL}/authors`)
      .then(res => setCritics(res.data))
      .catch(res => toast.error(res.message));
  }, []);


  if (!critics) {
    return '';
  }

  return (
    
    <ul>
    {critics.length > 0 ? (
      critics.map((critic, index) => (
        <li key={index}><NavLink to={`../critics/${critic.id}`} > {critic.name}</NavLink></li>
      ))
    ) : (
      <h2>There are no reviews on your list</h2>
    )}
    </ul>
 
);


}
export default CriticsList;