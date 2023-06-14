import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
