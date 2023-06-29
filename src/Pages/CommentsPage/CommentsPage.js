import CommentsList from '../../Components/CommentsComponents/CommentsList/CommentsList';
import Container from '../../Components/Core/Container/Container';
import './CommentsPage.scss';

const CommentsPage = () => {

  return (
    <Container>
      <div className="row">
        <div className="col-sm-12 text-center">
          <div className="review__item">
            <ul>
              <CommentsList/>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )

}
export default CommentsPage;