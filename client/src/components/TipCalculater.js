import React from 'react';
import ButtonGroup from './Buttongroup';


function TipCalculater(props) {
    return(
    <tr>
        <th scope="row"></th>
        <td><ButtonGroup/></td>
        <td>Total Tip:</td>
        <td>{props.td}</td>
        {props.children}
    </tr>
    );
}

export default TipCalculater;
