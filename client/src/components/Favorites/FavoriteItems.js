import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import Container from "../Container";
import {useStoreContext} from "../../utils/GlobalStore";
import API from '../../utils/API';
import MenuItems from "../MenuItems";
import menu from "../../db/menu.json";
import Button from "../Button";
import { LOAD_FAVORITES } from "../../utils/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartBroken, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

//need to find a way to retrieve prices from the menu 
function Favorites(props) {    
    // get user email
    const [state,dispatch] = useStoreContext();
    //load menu items stored under that user
    const getFavoriteItems=(email) => {
        //gets favorites from db given user email
        API.getFavorites(email).
        then(res=> dispatch({type:LOAD_FAVORITES,payload:res.data})).
        catch(err => console.log(err));
    };
   
    //create function that goes and gets the current price for an item item from the 
    //menu. store that price in an array. 
    function getPrice(item){
        return ( menu.filter(food => food.name==item)[0].price);
    }
    useEffect(() => {
        getFavoriteItems(state.email);
    },[]);
    const { menuCart } = props;
    
    function deleteFave(itemName){
        API.deleteFavorite({item:itemName, UserEmail: state.email}).
        then(res=> getFavoriteItems(state.email)).
        catch(err => console.log(err));
        
    };
    //add funciton to add item to order 
    return (<>
        <Container>
            <div className="menu-container">
            <h1>Favorites</h1>     
                
            {state.favorites.length ? state.favorites.map((fav)=>{
                return (
                    <div className="card menu-card text-center">
                        <div className="card-body d-flex justify-content-between">
                            <MenuItems key={fav.id} name={fav.item} price={getPrice(fav.item).toFixed(2)} description={fav.category} >                        
                                <Button btn={"float-right"} function={() => deleteFave(fav.item)} ><FontAwesomeIcon icon={faHeartBroken} /></Button>
                                <Button id={fav.id} type="button" btn={"float-right btn btn1"} function={() => { props.addItem({"name":fav.item,"price":getPrice(fav.item).toFixed(2),"category":fav.category,"quantity":1})}}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                            </MenuItems>
                        </div>
                    </div>
                )
            }) : <span><h3>You have no favorites :( You may add favorites from your order summary! Happy eating! </h3></span>}
        </div>
        <Link to="/ayce" className="active">
                <Button type={"button"} btn={"btn btn1 inline"}><h5>MENU</h5></Button>
            </Link>
            <Link to="/ordersummary" className="active">
                <Button type={"button"} btn={"btn btn1 inline"}><h5>ORDER SUMMARY</h5></Button>
            </Link>
        </Container>
    </>);
}



export default Favorites;
