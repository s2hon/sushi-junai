import React, { useState } from 'react';
import ButtonGroup from './Buttongroup';

function TipCalculater(props) {
    const [tipState, setTipState] = useState({
        percent: 0
    });

    return (
        <tr className="mainFont">
            <th scope="row"></th>
            <td><ButtonGroup total={props.total} setTipState={setTipState}/></td>
            <td style={{padding: "3% 0 0 3%"}}><h4>Total Tip: </h4></td>
            <td><h4> $ {(props.total * tipState.percent).toFixed(2)}</h4></td>
            {props.children}
        </tr>
    );
}

export default TipCalculater;
