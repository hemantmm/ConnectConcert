import logo from '../../images/ConnectConcert.png'


function Headers() {
  return (
    <>
    <nav>
  <div class="logo">
    <a href="/">
      <img src={logo} alt="Music Concert App" />
      </a>
  </div>
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
