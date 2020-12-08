import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import Container from "../components/Container";
import Image from "../components/Image";
import favItems from "../components/MenuItems"
import { connect } from 'react-redux'
import {useStoreContext} from "../utils/GlobalStore";
import API from '../utils/API';
import MenuItems from "../components/MenuItems";
import Button from "../components/Button";
import { Row } from 'reactstrap';
import { LOAD_FAVORITES } from "../utils/actions";
import { string } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

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

    const { favorites } = state
    var x = favorites.map((item) => JSON.parse(item))
    console.log(x)

<<<<<<< HEAD
//     //get user email

//     //load menu items stored under that user
//     const [state] = useStoreContext();
//     const userEmail = state.email;

//     //add delete function 
//     //add funciton to add item to order 
//     return (<>
//         <Nav />
//         <Container>
//             <h1>Coming Soon</h1>
//          <Image src={"./assets/029-tuna.svg"} alt={"picture of sushi"}/>
//         </Container>
//         <Footer />
//     </>);
// }



const mapStateToProps = state => ({
    favCart: state.favCart
});

const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => {
            dispatch({})
        }
    }
};

const Favorite = connect(
    mapStateToProps,
    mapDispatchToProps
)(FavCart);


export default Favorite
=======
   
    
    
    // function deleteFave(itemName, email){
    //     console.log("You are about to delete the item:"+ itemName+" from email: "+email);
    //     API.deleteFavorite({item:itemName, UserEmail: email}).
    //     then(res=> console.log(res)).
    //     catch(err => console.log(err));
    // };
// get and load favs
    //add delete function 
    //add funciton to add item to order 
    return (
    <>
        <Container>
            <h1>Favorites</h1>
            
         {/* need to be able to see past favorites and then either add to cart or remove from favorites */}
         {/* first lets load them using the menuItems componenet */}
         Our state typeOF is {(typeof(state.favorites))} with a length of {state.favorites.length};
         Here is the state {favorites}
         {/* {string.JSON(state.favorites)} */}

         {
            x.map((fav)=>{
                return (
                    <div className="card text-center">
                        <div className="card-body d-flex justify-content-between">
                            <MenuItems key={fav.id} name={fav.item} price={fav.id} description={fav.category} >
                                <Button icon ={"fa fa-plus"} btn={"float-right"} >{fav.item}</Button>
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
>>>>>>> 8b2014e187039850b0e46ef54c718aeac498a57c
