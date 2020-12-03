import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import API from '../utils/API';

function saveFave(itemName, itemCategory){
    //save email from store
   //  const [state,dispatch] = useStoreContext.useStoreContext();
   //  const email = state.email;
   //  console.log("The user's email is"+email);
   console.log("Youh are trying to favorite" + itemName );
    API.addFavorite({name:itemName, category:itemCategory}).
    then(res=> console.log(res)).
    catch(err => console.log(err));
   alert("You have favorited "+itemName);
}

//add function to delete favorite
//add ability to reload items so taht they respond to the item 

//DO NOT RENDER HEART BUTTON IF NOT LOGGED-IN
const MenuCartItem = (props) => {
    const { name, category, price } = props.item
    return (
        <tr>
        <td><Button btn={"float-right"} onClick={() => saveFave(name,category)}>
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