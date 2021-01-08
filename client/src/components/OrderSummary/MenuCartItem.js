import React from 'react';
import { Button } from 'reactstrap';


const MenuCartItem = (props) => {

    const { name, quantity, price } = props.item
    return (
        <tr>
            <th scope="row"><p>{name}</p></th>
            <td>
                <p><Button type="button" className="btn1 btn" onClick={() => props.decrementItem(props.item)}><span className="black-text">-</span></Button>
                {quantity}
                <Button type="button" className="btn btn1" onClick={() => props.incrementItem(props.item)} disabled={props.onetime}><span className="black-text">+</span></Button></p>
            </td>
            <td><p>$ {price.toFixed(2)}</p></td>
            <td><Button  type="button" className={"btn btn2"} onClick={() => props.removeItem(props.item)}><span className="black-text">X</span></Button></td>
        </tr>
    )
};

export default MenuCartItem;