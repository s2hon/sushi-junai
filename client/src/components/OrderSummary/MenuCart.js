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

    const currentQty = arr => arr.reduce((sum, {quantity}) => sum + quantity, 0);
    const currentQtyTotal = currentQty(menuCart);

    const sumCostTotal = arr => arr.reduce((sum, {price, quantity})=> sum + price*quantity, 0);
    const cartCostTotal = sumCostTotal(menuCart);

    const limitedItem = [
        'Screaming "O" (3/8 pcs)',
        'White "O" (3/8 pcs)',
        "Beef",
        "Conch (Makigai)",
        "Tako Wasabi",
        "Sweet Shrimp (Ama Ebi)",
        "Sashimi Special (4 pcs)",
        "Mochi Ice Cream"]
    
        const cartItems = menuCart.map(menuCart => menuCart.name)
        let used =  cartItems.filter(item => limitedItem.includes(item))    

    if (currentQtyTotal === 0) {
        return (
            <>
            <Counter/>
                <Container>
                    <div className="menu-container">
                    <Table bordered striped>
                        <thead>
                            <tr>
                                <th> <h1>Item (0)</h1></th>
                            </tr>
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
                            <tbody>
                            <tr>
                                <td>Current Total Cost:</td>
                                <td>$ {cartCostTotal.toFixed(2)}</td>
                            </tr>
                            </tbody>
                        </thead>
                    </Table>
                    </div>
                </Container>
            </>
        )
    }

    return (
        <>
        <Counter/>
            <Container>
            <div className="menu-container">
                <Row><h3 className="cartHeading">Order Summary ({currentQtyTotal})</h3></Row>
                <div className="menu-card">
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className="mainFont">
                        {menuCart.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                        </tbody>
                        </Table>
                        <div className="row">
                        <Link
                                to="/ayce" className="active">
                                    <Button type={"button"} className={"btn btn1"} style={{display:"inline-block"}}><h5>BACK TO MENU</h5></Button>
                        </Link> 
                        <Link to="/favorite" className="active">
                            <Button type={"button"} className={"btn btn1"} style={{backgroundColor: "#F29B9B", display:"inline-block"}}><h5>Favorites</h5></Button>
                        </Link>
                        </div>

                        <Table>
                            <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Current Total Cost:</td>
                            <td>$ {cartCostTotal.toFixed(2)}</td>
                        </tr>
                        <TipCalculater total={cartCostTotal.toFixed(2)} />
                    </tbody>
                </Table>
                </div>
                </div>
            </Container>
        </>
    );
};

export default MenuCart;