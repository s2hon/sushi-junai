import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const MenuCartItem = (props) => {
    const { name, category } = props.item
    return (
        <tr>
        <th scope="row">{name}</th>
        <td>{category}</td>
        <td><Button><FontAwesomeIcon icon={faHeartBroken} /></Button></td>
        </tr>
    )
};

export default MenuCartItem;