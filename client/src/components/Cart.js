import React from 'react';
import { Link } from "react-router-dom";
import CartItem from './CartItem';
import Nav from "./Nav";
import Container from "./Container";
import { Table } from 'reactstrap';
import Row from './Row';
import  ButtonGroup from './Buttongroup';
import  TipCalculater from './TipCalculater';

const Cart = (props) => {
    const { shoppingCart } = props
    const total = shoppingCart.reduce((acc, val) => acc + val.price, 0)
    const count = shoppingCart.length
    // let tipFifteen = ".15";
    // let tipTwenty = ".2";
    // let tipEighteen= ".18";
    // let totalTip = (total*tipFifteen)

    if (count == 0) {
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
                        <h3>whatsabi? 0 items so far?
                        <br/> 
                        Go
                        <Link
                            to="/menu"
                            className={window.location.pathname === "/menu" ? "nav-link active" : "nav-link"}
                        >
                        HERE
                        </Link>
                        and order ebi-thing with a dining staff! 
                        <br/> Let's Roll!</h3>
                    </tbody>
                </thead>
            </Table>
            <ButtonGroup/> 
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
                    <th>Item</th>
                    <th>Category</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingCart.map((item, idx) => <CartItem key={idx} item={item} removeItem={props.removeItem} />)}
                    <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td>Total Cost:</td>
                    <td>${total}</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td>You just saved:</td>
                    <td>${total-32.95}</td>
                    </tr>
                    <TipCalculater td={"newtip"}/>
                </tbody>
            </Table>
        </Container>
        </>
    );
};

export default Cart;