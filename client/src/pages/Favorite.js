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
import Header from "../components/Header/index";

function Favorites() {

    // get user email
    const [state,dispatch] = useStoreContext();
    //load menu items stored under that user
    const userEmail = state.email;
    function getFaves(email){
        API.getFavorites(email).
        then(res=> console.log("This is our response: "+JSON.stringify(res.data))).
        catch(err => console.log(err));
    };
    useEffect(() => {
        getFaves(state.email);
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
         {/* <Image src={"./assets/029-tuna.svg"} alt={"picture of sushi"}/> */}
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
