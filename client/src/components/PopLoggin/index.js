import React, {useState, useRef} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import API from "../../utils/API";
import { AUTH_SET_LOGGED_IN } from "../../utils/actions";
import { useStoreContext } from '../../utils/GlobalStore';

function PopLoggin (props){
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal);

    const emailRef = useRef();
    const passwordRef = useRef();
    const [store, dispatch] = useStoreContext();//use dispatch to get info

    const handleLogin = (event) => {
        event.preventDefault();
        const loginData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        API.login(loginData).then(response => {
            setShowError(false);
            const { email } = response.data;
            //could set local storage w/ email here
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    email
                }
            })
            toggle()
        }).catch(err => {
            setShowError(true);
            setErrorMessage("An error occurred during login");
        })
        console.log("The globalStore: "+ store);
    }

    
    return (
        <>
            <Button outline color="secondary" onClick={toggle}>Log In</Button>
            <Modal isOpen={modal} toggle={toggle} fade={false}>
            <ModalHeader toggle={toggle}>Log In</ModalHeader>
            <ModalBody>
                <form className="signup" >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="Email" ref={emailRef}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" placeholder="Password" ref={passwordRef}/>
                    </div>
                    {<div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                    </div>}
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleLogin}>LogIn</Button>
            </ModalFooter>
            </Modal>
        </>
    );
}

export default PopLoggin;