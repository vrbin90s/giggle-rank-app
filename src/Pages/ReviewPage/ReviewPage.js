import axios from "axios";
import Container from "../../Components/Core/Container/Container";
import ReviewItem from "../../Components/ReviewsComponents/ReviewItem/ReviewItem";
import { API_URL } from "../../Components/Config/Config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ReviewPage = () => {
  const [review, setReview] = useState('');
  const { id } = useParams();

  useEffect(() => {

    axios.get(`${API_URL}/reviews/${id}?_expand=author`)
        .then(res => setReview(res.data))
        .catch(res => toast.error(res.message))
      }, [id])
      
      if (!review) {
        return "";
      }

  return (
    
    <Container>
      <ReviewItem review={ review }/>
    </Container>
  )
}
export default ReviewPage;