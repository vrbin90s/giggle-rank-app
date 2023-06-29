import Container from '../../Components/Core/Container/Container';
import CriticsList from '../../Components/CriticsComponents/CriticsList/CriticsList';
import './CriticsPage.scss';

const CriticsPage = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-sm-12 text-center">
          <div className="review__item">

              <CriticsList/>

          </div>
        </div>
      </div>
    </Container>
  )
}
export default CriticsPage;