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
            <td>Total Tip:</td>
            <td>{(props.total * tipState.percent).toFixed(2)}</td>
            {props.children}
        </tr>
    );
}

export default TipCalculater;
