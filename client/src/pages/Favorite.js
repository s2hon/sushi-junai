import React from "react";
// import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Container from "../components/Container";
// import Row from "../components/Row";
import Footer from "../components/Footer";
// import Col from "../components/Col";
import Image from "../components/Image";
import favItems from "../components/MenuItems"
import { connect } from 'react-redux'
import FavCart from "../components/FavCart";

// function Favorite(props) {

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
