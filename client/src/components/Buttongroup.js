import React from 'react';
import { ButtonGroup, ButtonToolbar } from 'reactstrap';
import Button from "./Button";

function Buttongroup(props) {

    function handleFifteen(e) {
        e.preventDefault();
        props.setTipState({ percent: .15 });
    }
    function handleEighteen(e) {
        e.preventDefault();
        props.setTipState({ percent: .18 });
    }
    function handleTwenty(e) {
        props.setTipState({ percent: .20 });
    }

    return (
        <ButtonToolbar>
            <ButtonGroup size="lg">
                <Button btn={"btn btn1"} className="fifteen" function={handleFifteen}>15%
                </Button>
                <Button btn={"btn btn1"} className="eighteen" function={handleEighteen}>18%
                </Button>
                <Button btn={"btn btn1"} className="twenty" function={handleTwenty}>20%
                </Button>
            </ButtonGroup>
        </ButtonToolbar>
    );

}

export default Buttongroup;