import React from 'react';
import './style.css';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { 
  faFacebookF,
  faGithub,
  faInstagram,
  
} from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = (props) =>{

  return(
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <p>Connect with us!</p>
                <ul className="text-center">
                    <li><a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/sushijunai/"><FontAwesomeIcon icon={faFacebookF} size="2x"/></a></li>
                    <li><a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/sushijunai/"><FontAwesomeIcon icon={faInstagram} size="2x"/></a></li>
                    <li><a target={"_blank"} rel="noreferrer" href="mailto:sushijunai1@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">&copy;MIT <a href="https://github.com/s2hon/sushi-junai">
              <FontAwesomeIcon icon={faGithub} size="2x" /></a> Built with love
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 

export default Footer;