import './CommentItem.scss';
const CommentItem = ({comment}) => {

  const { username, email, body } = comment;

  return (
    <div>
      <ul>
        <li>Username: { username }</li>
        <li>Email: { email }</li>
        <li>Body: { body }</li>
      </ul>
    </div>
  )



}
export default CommentItem;