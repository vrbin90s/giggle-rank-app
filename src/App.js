import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Core/Navigation/Navigation';
import CriticsPage from './Pages/CriticsPage/CriticsPage';
import RatingsPage from './Pages/RatingsPage/RatingsPage';
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import HomePage from './Pages/HomePage/HomePage';
import MovieItem from './Components/MoviesComponents/MovieItem/MovieItem';
import ReviewItem from './Components/ReviewsComponents/ReviewItem/ReviewItem';
import CriticItem from './Components/CriticsComponents/CriticItem/CriticItem';
import RatingItem from './Components/RatingsComponents/RatingsItem/RatingItem';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/critics' element={<CriticsPage />} />
          <Route path='/ratings' element={<RatingsPage />} />
          <Route path='/reviews' element={<ReviewsPage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/critic/:id' element={<MovieItem />} />
          <Route path='/rating/:id' element={<ReviewItem />} />
          <Route path='/review/:id' element={<CriticItem />} />
          <Route path='/movies/:id/movie' element={<RatingItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
