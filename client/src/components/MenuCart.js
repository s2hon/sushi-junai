import React from 'react';
import { Link } from "react-router-dom";
import MenuCartItem from './MenuCartItem';
import Nav from "./Nav";
import Container from "./Container";
import { Table } from 'reactstrap';
import Row from './Row';
import  TipCalculater from './TipCalculater';


const MenuCart = (props) => {
    const { menuCart } = props
    const total = menuCart.reduce((acc, val) => acc + val.price, 0)
    const count = menuCart.length
    // let tipFifteen = ".15";
    // let tipTwenty = ".2";
    // let tipEighteen= ".18";
    // let totalTip = (total*tipFifteen)

    if (count === 0) {
        return (   
        <>
        <Nav />
        <Container> 
            <Table>
                <thead>
                    <tr>
                    <th> <h1>Item (0)</h1></th>
                    <th>Category</th>
                    <th>Price</th>
                    </tr>
                    <tbody>
                        <h3>Your cart is empty</h3>
                        <Link
                            to="/menu"
                            className={window.location.pathname === "/menu" ? "nav-link active" : "nav-link"}
                        >Click to Order
                        </Link> 
                    </tbody>
                </thead>
            </Table>
        </Container>
        </>
    )}

    return (
        <>
        <Nav />
        <Container>
            <Row><h3 className="cartHeading">Order Summary ({count})</h3></Row>
            <Table>
                <thead>
                    <tr>
                    <th> </th>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {menuCart.map((item, idx) => <MenuCartItem key={idx} item={item} removeItem={props.removeItem} handleFavorite={props.handleFavorite}/ > )}
                    <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td>Total Cost:</td>
                    <td>$ {total}</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td>You just saved:</td>
                    <td>$ {(total-32.95).toFixed(2)}</td>
                    </tr>
                    <TipCalculater total={total} td={"newtip"}/>
                </tbody>
            </Table>
        </Container>
        </>
    );
};

export default MenuCart;