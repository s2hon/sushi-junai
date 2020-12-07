import React from 'react';
import {Button} from 'reactstrap';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import API from '../../utils/API';
import {useStoreContext} from "../../utils/GlobalStore";


//DO NOT RENDER HEART BUTTON IF NOT LOGGED-IN
const MenuCartItem = (props) => {
    //add function to delete favorite
    //add ability to reload items so taht they respond to the item 
    const [state,dispatch] = useStoreContext();
    //save email from store to use with DB later
    const email = state.email;
    console.log("The user email is "+email)
    function saveFave(itemName, itemCategory){
        console.log("You are about to save the item:"+ itemName+" category: "+itemCategory);
        API.addFavorite({item:itemName, category:itemCategory, UserEmail: state.email}).
        then(res=> console.log(res)).
        catch(err => console.log(err));
    };

    const { name, quantity, category, price } = props.item
    return (
        <tr>
        <td><Button type="button" btn={"float-right btn1 btn"} onClick={() => saveFave(name,category)}>
                <FontAwesomeIcon icon={faHeart} />
            </Button>
        </td>
        <th scope="row"><p>{name}</p></th>
        <td>
        <p><Button type="button" btn="btn1 btn" onClick={() => props.decrementItem(props.item)}>-</Button>
        {quantity}
        <Button type="button" btn=" btn btn1" onClick={() => props.incrementItem(props.item)}>+</Button></p>
        </td>
        <td><p>{category}</p></td>
        <td><p>$ {price.toFixed(2)}</p></td>
        <td><Button  type="button" btn={"btn btn2"} onClick={() => props.removeItem(props.item)}>X</Button></td>
        </tr>
    )
};

export default MenuCartItem;