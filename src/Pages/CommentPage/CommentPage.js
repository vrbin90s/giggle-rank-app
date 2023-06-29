import axios from "axios";
import Container from "../../Components/Core/Container/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import CommentItem from "../../Components/CommentsComponents/CommentItem/CommentItem";

const CommentPage = () => {

  const [comment, setComment] = useState('');
  const { id } = useParams();

  useEffect(() => {

    axios.get(`${API_URL}/comments/${id}`)
        .then(res => setComment(res.data))
        .catch(res => toast.error(res.message))
      }, [id])
      
      if (!comment) {
        return "";
      }


  return (
    <Container>
        <CommentItem comment={ comment }/>
    </Container>
  )
}
export default CommentPage;