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
                <Button btn={"btn btn-dark"} className="eighteen" function={handleEighteen}>18%
                </Button>
                <Button btn={"btn btn-dark"} className="twenty"function={handleTwenty}>20%
                </Button>
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default Buttongroup;