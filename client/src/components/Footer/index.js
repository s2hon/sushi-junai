import React from 'react'
import './style.css'

const Footer = (props) =>{

    const ClickHandler = () =>{
      window.scrollTo(10, 0);
    }

  return(
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="widget about-widget">
            <p>Connect with us!</p>
              <ul>
                  <li><a target={"_blank"} href="https://www.facebook.com/sushijunai/"><i className="fa fa-facebook fa-2x"></i></a></li>
                  <li><a target={"_blank"} href="https://www.instagram.com/sushijunai/"><i className="fa fa-instagram fa-2x"></i></a></li>
                  <li><a target={"_blank"} href="mailto:sushijunai1@gmail.com"><i className="fa fa-envelope fa-2x"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <p className="copyright">&copy;MIT <a href="https://github.com/s2hon/sushi-junai"><i className="fa fa-github fa-2x"></i></a> Built with love</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 

export default Footer;