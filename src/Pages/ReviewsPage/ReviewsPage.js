import Container from '../../Components/Core/Container/Container';
import ReviewsList from '../../Components/ReviewsComponents/ReviewsList/ReviewsList';
import './ReviewsPage.scss';

const ReviewsPage = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-sm-12 text-center">
          <div className="review__item">
            <ul>
              <ReviewsList/>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default ReviewsPage;