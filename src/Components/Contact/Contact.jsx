import React from 'react'
import Headers from '../Header/Headers';

function Contact() {
  return (
    // <div>Contact</div>
    <>
    <Headers />
    <div className="contactbackground">
      {/* <Container> */}
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a front-end developer
          role. <br /> If there is any vacancy my inbox is always open. Whether
          <br /> you have any further questions or just want to say hi, <br />
          I’ll try my best to get back to you!
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.linkedin.com/in/hemant-mehta-97b40b220/");
          }}
        >
          Say Hello
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>HemantM</span>
        </p>
    </div>
    </>
  )
}

export default Contact