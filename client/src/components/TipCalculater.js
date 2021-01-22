import React, { useState } from 'react';
import ButtonGroup from './Buttongroup';

function TipCalculater(props) {
    const [tipState, setTipState] = useState({
        percent: 0
    });

    return (
        <>
            
            <div className="col-3 offset-6">Total Tip:
                        </div>
            <div className="col-3">
                $ {(props.total * tipState.percent).toFixed(2)}
            </div>
<div className="col-3">
                <ButtonGroup total={props.total} setTipState={setTipState} />
            </div>

        </>
    );
}

export default TipCalculater;
