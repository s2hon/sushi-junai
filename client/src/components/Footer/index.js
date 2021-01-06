import React from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props){
  return (
    <footer className="wpo-site-footer">
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <a className="copyright" href="https://github.com/s2hon/sushi-junai">&copy;MIT <FontAwesomeIcon icon={faGithub} size="2x" /> Built with caffiene and love
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;