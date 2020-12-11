import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import API from '../../utils/API';

 function saveFave(itemName, itemCategory){

    console.log("You are trying to favorite" + itemName );
     API.addFavorite({name:itemName, category:itemCategory})
     .then(res=> console.log(res))
     .catch(err => console.log(err));
    alert("You have favorited "+itemName);
 }

const MenuCartItem = (props) => {
    const { name, category } = props.item
    return (
        <tr>
        <th scope="row">{name}</th>
        <td>{category}</td>
        <td ><Button  ><FontAwesomeIcon icon={faHeartBroken} /></Button></td>
        </tr>
    )
};

export default MenuCartItem;