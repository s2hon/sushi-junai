import React from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,

} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

var style = {
  backgroundColor: "#F26430",
  borderTop: "none",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  fontWeight: "bold",
  color: "white",

}

const phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}
function Footer() {
  return (
    <>
    <footer className="footer"style={{color: "white"}}>
      <div style={phantom} />
      <p style={{textAlign: "center"}}>Connect with us!</p>
              <div className="footer-social-container" style={{textAlign: "center"}}>
                <a style={{color: "white"}}target={"_blank"} rel="noreferrer" href="https://www.facebook.com/sushijunai/"><FontAwesomeIcon icon={faFacebookF} size="3x" /></a>
                <a style={{color: "white"}}target={"_blank"} rel="noreferrer" href="https://www.instagram.com/sushijunai/"><FontAwesomeIcon icon={faInstagram} size="3x" /></a>
                <a style={{color: "white"}}target={"_blank"} rel="noreferrer" href="mailto:sushijunai1@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="3x" /></a>
              </div>
              <div className="row">
            <div className="col col-xs-12">
              <a style={{color: "white"}} className="copyright" href="https://github.com/s2hon/sushi-junai">&copy;MIT <FontAwesomeIcon icon={faGithub} size="2x" /> Built with love
              </a>
              </div>
              </div>
    </footer>
    </>
  );
}


export default Footer;