import './CriticItem.scss';
const CriticItem = ( { critic } ) => {
  const { name, username, email, address } = critic;
  const { street, suite, city, zipcode } = address;

  return (
    <div>
      <ul>
        <li>Name: { name }</li>
        <li>Username: { username }</li>
        <li>Email: { email }</li>
        <li>Street: { street }</li>
        <li>Suite: { suite }</li>
        <li>City: { city }</li>
        <li>Post code:{ zipcode }</li>
      </ul>
    </div>
  )

}
export default CriticItem;