// import './App.css';
import logo2 from '../../images/cc2.jpg'
import logo from '../../images/cc1.png'
import HeaderMid from '../Homepage/HeaderMid';


function Headers() {
  return (
    <>
    <nav>
  <div class="logo">
    <a href="/">
      <img src={logo} alt="Music Concert App" />
      </a>
  </div>
  {/* <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
      </Router> */}
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/event">Events</a></li>
    <li><a href="/artist">Artist</a></li>
    <li><a href="/premium">Premium</a></li>
    <li><a href="contact">Contact</a></li>
  </ul>

  <ul className='nav-links'>
  <li><a href="#download">
      <button>
      Download
      </button>
      </a></li>
  </ul>
</nav>

    </>
  );
}

export default Headers;
