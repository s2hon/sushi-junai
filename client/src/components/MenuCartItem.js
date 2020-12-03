import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MenuCartItem = (props) => {
    const { name, category, price } = props.item
    return (
        <tr>
        <td><Button btn={"float-right"} onClick={() => props.handleFavorite(props.item)}>
                <FontAwesomeIcon icon={faHeart} />
            </Button>
        </td>
        <th scope="row">{name}</th>
        <td>{category}</td>
        <td>{price}</td>
        <td><Button color="danger" onClick={() => props.removeItem(props.item)}>X</Button></td>
        </tr>
    )
};

export default MenuCartItem;