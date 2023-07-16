import './App.css';
import logo2 from '../src/images/Untitled design (1).jpg'
import logo from '../src/images/ConnectConcert.png'

function App() {
  return (
    <>
    <nav>
  <div class="logo">
    <a href="#">
      <img src={logo} alt="Music Concert App" />
      </a>
  </div>
  <ul class="nav-links">
    <li><a href="#Home">Home</a></li>
    <li><a href="#event">Events</a></li>
    <li><a href="#artist">Artists</a></li>
    <li><a href="#premium">Premium</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <ul className='nav-links'>
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
</section>
    </>
  );
}

export default App;
