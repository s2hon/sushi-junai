import React, {useState, useRef} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import API from "../../utils/API";
import { AUTH_SET_LOGGED_IN } from "../../utils/actions";
import { useStoreContext } from '../../utils/GlobalStore';

function PopSignUp (props){
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal);

  const emailRef = useRef();
  const passwordRef = useRef();
  const [, dispatch] = useStoreContext();//use dispatch to get info

  const handleSignUp = (event) => {
    event.preventDefault();
    const signupData = {
        email: emailRef.current.value,
        password: passwordRef.current.value
    };
    console.log(signupData);
    API.signup(signupData).then(response => {
        const { email } = response.data;
        dispatch({
            type: AUTH_SET_LOGGED_IN,
            data: {
                email
            }
        });
        toggle()
    }).catch(err => {
        setShowError(true);
        setErrorMessage("An error occurred while signing up");
    })
}

  
  return (
      <>
        <Button className="btn btn1" onClick={toggle}><span className="black-text">Sign Up</span></Button>
        <Modal isOpen={modal} toggle={toggle} fade={false}>
          <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
          <ModalBody>
          <form className="signup">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" placeholder="Email" ref={emailRef} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" placeholder="Password" ref={passwordRef} />
            </div>
            <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
            </div>
        </form>
          </ModalBody>
          <ModalFooter>
            <Button className="btn btn1" onClick={handleSignUp}><span className="black-text">Sign Up</span></Button>
          </ModalFooter>
        </Modal>
      </>
    );
}

export default PopSignUp;