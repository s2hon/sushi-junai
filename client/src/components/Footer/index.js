import React from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,

} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer(props){
  return (
    <footer className="wpo-site-footer">
      {/* <div className="wpo-upper-footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12 text-center">
              <p>Connect with us!</p>
              <div className="footer-social-container">
                <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/sushijunai/"><FontAwesomeIcon icon={faFacebookF} size="3x" /></a>
                <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/sushijunai/"><FontAwesomeIcon icon={faInstagram} size="3x" /></a>
                <a target={"_blank"} rel="noreferrer" href="mailto:sushijunai1@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="3x" /></a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <a className="copyright" href="https://github.com/s2hon/sushi-junai">&copy;MIT <FontAwesomeIcon icon={faGithub} size="2x" /> Built with love
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;