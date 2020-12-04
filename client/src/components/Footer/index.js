import React from 'react'
import './style.css'

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
                    <li><a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/sushijunai/"><i className="fa fa-facebook fa-2x"></i></a></li>
                    <li><a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/sushijunai/"><i className="fa fa-instagram fa-2x"></i></a></li>
                    <li><a target={"_blank"} rel="noreferrer" href="mailto:sushijunai1@gmail.com"><i className="fa fa-envelope fa-2x"></i></a></li>
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
                <i className="fa fa-github fa-2x"></i></a> Built with love
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 

export default Footer;