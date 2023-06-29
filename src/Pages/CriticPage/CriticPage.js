import { useEffect, useState } from "react";
import Container from "../../Components/Core/Container/Container";
import CriticItem from "../../Components/CriticsComponents/CriticItem/CriticItem";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import axios from "axios";

const CriticPage = () => {

  const [critic, setCritic] = useState('');
  const { id } = useParams();

  useEffect(() => {

    axios.get(`${API_URL}/authors/${id}`)
        .then(res => setCritic(res.data))
        .catch(res => toast.error(res.message))
      }, [id])
      
      if (!critic) {
        return "";
      }


  return (
    <Container>
      <CriticItem critic={ critic }/>
    </Container>
  )
}
export default CriticPage;