// import './App.css';
import logo2 from '../../images/cc2.jpg'
// import logo from '../../images/ConnectConcert.png'
import logo from '../../images/cc1.png'
import HeaderMid from '../Homepage/HeaderMid';
import {ethers} from 'ethers'


function Headers() {

  const contractTxId="cl_0CAx3tmDGTsQ4VbiNvK9uQbZmM6B4dTFzvzcxm6I";
 
  const metamaskBtn=async()=>{
    const provider=new ethers.providers.Web3Provider(window.etherum);
    await provider.send("eth_requestAccounts",[])
    const wallet_address=await provider.getSigner().getAddress()
    let identity=await screenLeft.getItem(
      `temp_address:${contractTxId}:${wallet_address}`
    )  
  }
  
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
      <button onClick={metamaskBtn}>
      Connect
      </button>
      </a></li>
  </ul>
</nav>

    </>
  );
}

export default Headers;
