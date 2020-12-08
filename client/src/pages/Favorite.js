import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import Container from "../components/Container";
// import Row from "../components/Row";
import Footer from "../components/Footer";
// import Col from "../components/Col";
import Image from "../components/Image";
import favItems from "../components/MenuItems"
import { connect } from 'react-redux'
import FavCart from "../components/Favorite/FavCart";
import {useStoreContext} from "../utils/GlobalStore";
import API from '../utils/API';
import MenuItems from "../components/MenuItems";
import Button from "../components/Button";
import { Row } from 'reactstrap';
import { LOAD_FAVORITES } from "../utils/actions";
import { string } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
function Favorites() {
    
    const [state,dispatch] = useStoreContext();
    // console.log("This is our state "+ JSON.stringify(state));
    //load menu items stored under that user
    const getFavoriteItems=(email) => {
        //gets favorites from db given user email
        API.getFavorites(email).
        then(res=> dispatch({type:LOAD_FAVORITES,payload:res.data})).
        catch(err => console.log(err));
    };
   
    useEffect(() => {
        getFavoriteItems(state.email);
    },[]);
    
    function deleteFave(itemName){
        console.log("You are about to delete the item:"+ itemName+" from email: "+state.email);
        API.deleteFavorite({item:itemName, UserEmail: state.email}).
        then(res=> getFavoriteItems(state.email)).
        catch(err => console.log(err));
        
    };
    //add funciton to add item to order 
    console.log(state.favorites);
    return (<>
        <Container>
            <h1>Favorites</h1>
            
         {/* logging data just to see what we are working with */}
         Our state typeOF is {(typeof(state.favorites))} with a length of {state.favorites.length};
         {/* Here is the state {state.favorites} */}
         {//go through parsed data and create buttons 
             state.favorites.map((fav)=>{
                return (
                    <div className="card text-center">
                        <div className="card-body d-flex justify-content-between">
                            <MenuItems key={fav.id} name={fav.item}  description={fav.category} >
                                <Button btn={"float-right"} function={() => deleteFave(fav.item)} >{fav.item}<FontAwesomeIcon icon={faHeartBroken} /></Button>
                            </MenuItems>
                        </div>
                    </div>
                )
            })
         }
        
        </Container>
    </>);
}



// const mapStateToProps = state => ({
//     favCart: state.favCart
// });

// const mapDispatchToProps = dispatch => {
//     return {
//         removeItem: item => {
//             //is this where we remove the item?
//             // or in reducer/favCart?
//             dispatch({})
//         }
//     }
// };

// const Favorite = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(FavCart);


export default Favorites;
