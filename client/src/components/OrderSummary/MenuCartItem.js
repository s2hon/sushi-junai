import React from 'react';
import { Button } from 'reactstrap';
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
    // const email = state.email;
    
    function saveFave(itemName, itemCategory){
        console.log("The user's email is"+state.email);
        API.addFavorite({name:itemName, category:itemCategory, email: state.email}).
        then(res=> console.log(res)).
        catch(err => console.log(err));
    };
    const { name, category, price } = props.item;

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