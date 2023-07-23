import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Home from './pages/Home';
import Event from './Components/Event/Event';
import Artist from './Components/Artist/Artist';
import Premium from './Components/Premium/Premium';


function App() {
  return (
    <>
  <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/event' element={<Event />}></Route>
            <Route path='/artist' element={<Artist />}></Route>
            <Route path='/premium' element={<Premium />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
