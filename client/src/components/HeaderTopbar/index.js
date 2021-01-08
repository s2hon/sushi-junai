import React, { useState } from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { 
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Feedback from '../Feedback';
import './style.css';


const HeaderTopbar = (props) => {
    const {
        buttonLabel,
        className
    } = props;
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li style={{padding: "6.5%"}}>
                                    <Button className="btn btn2">
                                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sushijunai/">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </Button>

                                    <Button className="btn btn2">
                                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sushijunai">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </Button>
                                </li>
                                <li><a target="_blank" rel="noreferrer" href="mailto:sushijunai1@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="fi" /> sushijunai1@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li></li>
                                <li>
                                    <div>
                                        <Button color="danger" onClick={toggle}>{buttonLabel}Your Feedback Matters!</Button>
                                        <Modal isOpen={modal} toggle={toggle} fade={false} className={className} style={{opacity:1}}>
                                            <ModalHeader toggle={toggle} close={closeBtn}>
                                                <h3 className="section-head">Tell us what you think!</h3>
                                            </ModalHeader>
                                            <ModalBody>
                                                <Feedback />
                                            </ModalBody>
                                        </Modal>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;