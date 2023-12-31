import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/services' element={ <Services /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
