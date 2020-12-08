import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import Container from "../components/Container";
import {useStoreContext} from "../utils/GlobalStore";
import API from '../utils/API';
import MenuItems from "../components/MenuItems";
import Button from "../components/Button";
import { LOAD_FAVORITES } from "../utils/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
    
function Favorites() {    
    // get user email
    const [state,dispatch] = useStoreContext();
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
        API.deleteFavorite({item:itemName, UserEmail: state.email}).
        then(res=> getFavoriteItems(state.email)).
        catch(err => console.log(err));
        
    };
    //add funciton to add item to order 
    console.log(state.favorites);
    return (<>
        <Container>
            <div className="menu-container">
            <h1>Favorites</h1>
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
        </div>
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
