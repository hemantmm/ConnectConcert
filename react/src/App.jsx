import './App.css';
// import logo2 from '../src/images/cc2.jpg'
// import logo from '../src/images/cc1.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Home from './pages/Home';
import Event from './Components/Event/Event';
import Artist from './Components/Artist/Artist';
import Premium from './Components/Premium/Premium';

function App() {
  return (
    <>
    {/* <nav> */}
  {/* <div class="logo">
    <a href="#">
      <img src={logo} alt="Music Concert App" />
      </a>
  </div> */}
  <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            {/* <HeaderMid /> */}
            {/* <Route path='/about' element={<About />}></Route> */}
            {/* <Route path='/project' element={<Project />}></Route> */}
            <Route path='/event' element={<Event />}></Route>
            <Route path='/artist' element={<Artist />}></Route>
            <Route path='/premium' element={<Premium />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
      </Router>
  {/* <ul class="nav-links">
    <li><a href="#Home">Home</a></li>
    <li><a href="#event">Events</a></li>
    <li><a href="#artist">Artists</a></li>
    <li><a href="#premium">Premium</a></li>
    <li><a href="#Contactpage">Contact</a></li>
  </ul> */}

  {/* <ul className='nav-links'>
  <li><a href="#download">
      <button>
      Download
      </button>
      </a></li>
  </ul>
</nav>

<section>
<div>
        <h1 className="message">Listening to good music makes your mood better</h1>
        <p className="messages">With a new generation of music atmosphere, live your day by always listening to music so that your mood will be better, and enjoy every music collection from the best artist.</p>
      </div>

      <div className='main-image'>
      <img class="" src={logo2} alt="Main_Image" />
      </div>
</section> */}
    </>
  );
}

export default App;
