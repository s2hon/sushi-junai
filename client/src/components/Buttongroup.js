import React from 'react';
import {ButtonGroup, ButtonToolbar } from 'reactstrap';
import Button from "./Button";

function Buttongroup(props) {
    
    function handleFifteen(e){
        e.preventDefault();
    let tipTotal= props.total * .15;
    alert(tipTotal);
    }
    function handleEighteen(e){
        e.preventDefault();
    let tipTotal= props.total * .18;
    alert(tipTotal);
    }
    function handleTwenty(e){
        e.preventDefault();  
    let tipTotal= props.total * .2;
    alert(tipTotal);
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