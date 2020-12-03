import React from 'react';
import {ButtonGroup, ButtonToolbar } from 'reactstrap';
import Button from "./Button";

function Buttongroup() {
    
    function handleFifteen(e){
        e.preventDefault();
    alert('15 was clicked.');
        
    }
    function handleEighteen(e){
        e.preventDefault();
    alert('18 was clicked.');
    }
    function handleTwenty(e){
        e.preventDefault();
    alert('20 was clicked.');
    }
    return (
        <ButtonToolbar>
            <ButtonGroup size="lg">
                <Button btn={"btn btn-dark"} className="fifteen" function={handleFifteen}>15%
                </Button>
<<<<<<< HEAD
                <Button className="eighteen" function={() => {

                }}>18%
=======
                <Button btn={"btn btn-dark"} className="eighteen" function={handleEighteen}>18%
>>>>>>> 7ff6ef5bc21b687387ed49c1a23f147ea572f8ea
                </Button>
                <Button btn={"btn btn-dark"} className="twenty"function={handleTwenty}>20%
                </Button>
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default Buttongroup;