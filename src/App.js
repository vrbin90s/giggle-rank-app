import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Core/Navigation/Navigation';
import CriticsPage from './Pages/CriticsPage/CriticsPage';
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import HomePage from './Pages/HomePage/HomePage';
import MoviePage from './Pages/MoviePage/MoviePage';
import CommentsPage from './Pages/CommentsPage/CommentsPage';
import CommentPage from './Pages/CommentPage/CommentPage';
import ReviewPage from './Pages/ReviewPage/ReviewPage';
import CriticPage from './Pages/CriticPage/CriticPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/critics' element={<CriticsPage />} />
          <Route path='/critics/:id' element={<CriticPage />} />
          <Route path='/comments' element={<CommentsPage />} />
          <Route path='/comments/:id' element={<CommentPage />} />
          <Route path='/reviews' element={<ReviewsPage />} />
          <Route path='/reviews/:id' element={<ReviewPage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:id' element={<MoviePage />} />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
