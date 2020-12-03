import React from 'react';
import { Button } from 'reactstrap';
import API from "../utils/API"

const CartItem = (props) => {
    const { name, category, price } = props.item

    function favItem(itemName,itemCategory){      
        API.post({item:itemName,category: itemCategory})
    }
    return (
        <tr>
        <th scope="row">{name}</th>
        <td>{category}</td>
        <td>{price}</td>
        <td><Button color="danger" onClick={() => props.removeItem(props.id)}>X</Button></td>
        <td><Button color="success" onClick={() =>favItem({name},{category})}>favorite </Button></td>
        </tr>
    )
};

export default CartItem;