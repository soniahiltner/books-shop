
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Favourites from './pages/Favourites/Favourites';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import MovieList from './pages/MovieList/MovieList';
import ToWatch from './pages/ToWatch/ToWatch';


function App() {

  return (
    <div className='app'>
      <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/towatch" element={<ToWatch />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </div>
    </div>
    
  );
}

export default App
