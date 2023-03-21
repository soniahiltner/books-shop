
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { BooksProvider } from './context/BooksContext';
import Book from './pages/Book/Book';
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Store from './pages/Store/Store';
import WishList from './pages/WishList/WishList';


function App() {

  return (
    <BooksProvider>
      <div className='app'>
      <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/store/:id" element={<Book />} />
      </Routes>
    </div>
    </div>
    </BooksProvider>
    
    
  );
}

export default App
