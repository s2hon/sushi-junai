import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons" 
import './style.css';

const Scrollbar = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                    <li><AnchorLink href='#top'><FontAwesomeIcon icon={faArrowUp} /></AnchorLink></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Scrollbar;
