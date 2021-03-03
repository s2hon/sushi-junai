import React, { useState } from 'react';
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

                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li>
                                </li>
                                <li>
                                    <div>
                                        <Button style={{backgroundColor: "#E63736"}} onClick={toggle}>{buttonLabel}Your Feedback Matters!</Button>
                                        <Modal isOpen={modal} toggle={toggle} fade={false} className={className} style={{opacity:1, zIndex:20}}>
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