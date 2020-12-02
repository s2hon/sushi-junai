import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

function Buttongroup(props) {

    return (
        <ButtonToolbar>
            <ButtonGroup size="lg">
                <Button className="fifteen" function={() => {

                }}>15%
                </Button>
                <Button className="eighteen" fufunction={() => {

                }}>18%
                </Button>
                <Button className="twenty"function={() => {

                }}>20%
                </Button>
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default Buttongroup;