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

function Favorites() {

    // get user email
    const [state,dispatch] = useStoreContext();
    //load menu items stored under that user
    const getFavoriteItems=(email) => {
        API.getFavorites(email).
        then(res=> {
            let favoritesArray = []
            console.log("This is our response: "+JSON.stringify(res.data))
            console.log("The length of our response array is "+res.data.length);
            res.data.map((favs) => {
                // convert each response object to string
                favoritesArray.push(JSON.stringify(favs));
                console.log("We are pushing"+ JSON.stringify(favs));
            });
            console.log("Length of favorites array "+favoritesArray.length);
            dispatch({type:LOAD_FAVORITES,favorites:favoritesArray});
        }).
        catch(err => console.log(err));
    };
    useEffect(() => {
        getFavoriteItems(state.email);
    },[]);
    // function deleteFave(itemName, email){
    //     console.log("You are about to delete the item:"+ itemName+" from email: "+email);
    //     API.deleteFavorite({item:itemName, UserEmail: email}).
    //     then(res=> console.log(res)).
    //     catch(err => console.log(err));
    // };
// get and load favs
    //add delete function 
    //add funciton to add item to order 
    return (<>
        <Container>
            <h1>Favorites</h1>
            
         {/* need to be able to see past favorites and then either add to cart or remove from favorites */}
         {/* first lets load them using the menuItems componenet */}
         Our state favorites are {state.favorites} with a length of {state.favorites.length};
         {/* {string.JSON(state.favorites)} */}
         {
             state.favorites.map((fav)=>{
                return (
                    <div className="card text-center">
                        <div className="card-body d-flex justify-content-between">
                            <MenuItems key={fav.id} name={fav.item}  description={fav.description} >
                                <Button icon ={"fa fa-plus"} btn={"float-right"}>{fav.item}</Button>
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
