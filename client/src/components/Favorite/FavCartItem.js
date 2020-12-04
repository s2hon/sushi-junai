import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import API from '../../utils/API';
// import {useStoreContext} from "../utils/GlobalStore";

//create api function to add to DB once button is clicked 
//check globalStore to make sure user is signed in 
// if not signed in - prompt them 

 function saveFave(itemName, itemCategory){
     //save email from store
    //  const [state,dispatch] = useStoreContext.useStoreContext();
    //  const email = state.email;
    //  console.log("The user's email is"+email);
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
        <td onClick={()=>saveFave(name,category)}><Button onClick={()=>saveFave(name,category)} ><FontAwesomeIcon icon={faHeartBroken} /></Button></td>
        </tr>
    )
};

export default MenuCartItem;