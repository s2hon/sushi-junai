import React from 'react';
import { Link } from "react-router-dom";
import MenuCartItem from './MenuCartItem';
import Container from "../Container";
import { Table } from 'reactstrap';
import Row from '../Row';
import TipCalculater from '../TipCalculater';
import { Button } from 'reactstrap';
import './style.css';
import Image from "../Image";
import shockedIcon from "./icons8-surprised-50.png"
import sadIcon from "./icons8-sad-50.png"
import Counter from "../Counter";

const MenuCart = (props) => {
    const { menuCart } = props
    const { totalSavings } = props
    console.log(totalSavings)

    const currentQty = arr => arr.reduce((sum, {quantity}) => sum + quantity, 0);
    const currentQtyTotal = currentQty(menuCart);
    console.log(currentQtyTotal);

    const sumCostTotal = arr => arr.reduce((sum, {price, quantity})=> sum + price*quantity, 0);
    const cartCostTotal = sumCostTotal(menuCart);
    console.log(cartCostTotal);

    if (currentQtyTotal === 0) {
        return (
            <>
            <Counter/>
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th> <h1>Item (0)</h1></th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                            <tbody>
                                <h3><Image src={shockedIcon} width="25" alt="shockedMaki" /> whatsabi? 0 items so far?
                                <Image src={sadIcon} width="25" alt="sadMaki" />
                                <br/> 
                                <Link
                                    to="/ayce"
                                    className={window.location.pathname === "/ayce" ? "nav-link active" : "nav-link"}
                                >
                                Go HERE
                                </Link>
                                and order ebi-thing with a dining staff! 
                                <br/> Let's Roll!</h3>
                            <tr>
                                <td></td>
                                <td>Current Total Cost:</td>
                                <td>$ {cartCostTotal.toFixed(2)}</td>
                            </tr>
                            <TipCalculater total={cartCostTotal.toFixed(2)} />
                            </tbody>
                        </thead>
                    </Table>
                </Container>
            </>
        )
    }

    return (
        <>
        <Counter/>
            <Container>
                <Row><h3 className="cartHeading">Order Summary ({currentQtyTotal})</h3></Row>
                <Table>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className="mainFont">
                        {menuCart.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} />)}
                        <tr>
                            <Link
                                to="/ayce"
                                className={window.location.pathname === "/ayce" ? "nav-link active" : "nav-link"}
                            ><Button type={"button"} btn={"btn btn1"}>BACK TO MENU</Button>
                            
                            </Link>
                        </tr>
                        <tr>

                            <th scope="row"></th>
                            <td></td>
                            <td>Current Total Cost:</td>
                            <td>$ {cartCostTotal.toFixed(2)}</td>
                        </tr>
                        <TipCalculater total={cartCostTotal.toFixed(2)} />
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default MenuCart;