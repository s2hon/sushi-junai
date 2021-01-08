import React from 'react';

const MenuCartGreyItem = (props) => {

    const { name, quantity, category, price } = props.item
    return (
        <tr>
            <th scope="row"><p>{name}</p></th>
            <td>{quantity}</td>
            <td><p>$ {price.toFixed(2)}</p></td>
        </tr>
    )
};

export default MenuCartGreyItem;