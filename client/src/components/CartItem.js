import React from 'react';
import { Button } from 'reactstrap';

const CartItem = (props) => {
    const { name, category, price } = props.item
    return (
        <tr>
        <th scope="row">{name}</th>
        <td>{category}</td>
        <td>{price}</td>
        <td><Button color="danger" onClick={() => props.removeItem(props.id)}>X</Button></td>
        </tr>
    )
};

export default CartItem;