import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import './style.css';

const Newsletter = (props) => {

    const SubmitHandler = (e) => {
      e.preventDefault()
    }
    return(
        <section className="wpo-news-letter-section">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 offset-lg-3 col-sm-8 offset-md-2">
                        <div className="wpo-newsletter">
                            <h3>Follow us for sushi news <FontAwesomeIcon className="black-text" icon={faHeart} style={{color: "FFCD7A"}}/> <FontAwesomeIcon className="black-text" icon={faHeart} /> <FontAwesomeIcon className="black-text" icon={faHeart} style={{color: "F2AA6B"}}/></h3>
                            <div className="wpo-newsletter-form">
                                <form onSubmit={SubmitHandler}>
                                    <div>
                                        <input type="text" placeholder="Enter Your Email" className="form-control"/>
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;