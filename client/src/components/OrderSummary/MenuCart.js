import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuCartItem from './MenuCartItem';
import Container from "../Container";
import { 
    TabContent, 
    TabPane, 
    Button, 
    Row, 
    Col,
    Nav, 
    NavItem, 
    NavLink,
    Table } from 'reactstrap';
import classnames from 'classnames';
import Image from "../Image";
import shockedIcon from "./icons8-surprised-50.png"
import sadIcon from "./icons8-sad-50.png";
import TipCalculater from '../TipCalculater';
import Counter from "../Counter";
import './style.css';
 
const MenuCart = (props) => {
    const [activeTab, setActiveTab] = useState('1');
 
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
 
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
 
    const appetizers = menuCart.filter(item => item.category === "Appetizer");
    const salads = menuCart.filter(item => item.category === "Salad");
    const soups = menuCart.filter(item => item.category === "Soup/Noodles");
    const rice = menuCart.filter(item => item.category === "Rice");
    const sushi = menuCart.filter(item => item.category === "Sushi");
    const classicRolls = menuCart.filter(item => item.category === "Classic Roll/Hand Roll");
    const chefsSpecial = menuCart.filter(item => item.category === "Chef’s Special Rolls");
    const tempuraRolls = menuCart.filter(item => item.category === "Tempura Rolls");
    const bakedRolls = menuCart.filter(item => item.category === "Baked Rolls");
    const desserts = menuCart.filter(item => item.category === "Desserts");
 
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
                <Row>
                    <h3 className="cartHeading">Order Summary ({currentQtyTotal})</h3>
                </Row>
                <div className="menu-container">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                appetizers
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                salad
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}
                            >
                                soup/noodles
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '4' })}
                                onClick={() => { toggle('4'); }}
                            >
                                rice
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '5' })}
                                onClick={() => { toggle('5'); }}
                            >
                                sushi(nigiri)
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '6' })}
                                onClick={() => { toggle('6'); }}
                            >
                                sushi(roll)
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '7' })}
                                onClick={() => { toggle('7'); }}
                            >
                                dessert
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '8' })}
                                onClick={() => { toggle('8'); }}
                            >
                                past rounds
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="mainFont">
                                    {appetizers.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                                </tbody>
                            </Table>
                        </TabPane>
                        <TabPane tabId="2">
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="mainFont">
                                    {salads.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                                </tbody>
                            </Table>
                        </TabPane>
                        <TabPane tabId="3">
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="mainFont">
                                    {soups.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                                </tbody>
                            </Table>
                        </TabPane>
                        <TabPane tabId="4">
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="mainFont">
                                    {rice.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                                </tbody>
                            </Table>
                        </TabPane>
                        <TabPane tabId="5">
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="mainFont">
                                    {sushi.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                                </tbody>
                            </Table>
                        </TabPane>
                        <TabPane tabId="6">
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="mainFont">
                                    {classicRolls.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                                    {chefsSpecial.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                                    {tempuraRolls.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                                    {bakedRolls.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                                </tbody>
                            </Table>
                        </TabPane>
                        <TabPane tabId="7">
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="mainFont">
                                    {desserts.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                                </tbody>
                            </Table>
                        </TabPane>
                        <TabPane tabId="8">
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="mainFont">
                                    {sushi.map((item, idx) => <MenuCartItem key={idx} item={item} incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} onetime={used.includes(item.name)} />)}
                                </tbody>
                            </Table>
                        </TabPane>
                    </TabContent>
                    <div className="row">
                        <Link
                                to="/ayce" className="active">
                                    <Button type={"button"} className={"btn btn1"} style={{display:"inline-block"}}><h5>BACK TO MENU</h5></Button>
                        </Link> 
                        <Link to="/favorite" className="active">
                            <Button type={"button"} className={"btn btn1"} style={{backgroundColor: "#F29B9B", display:"inline-block"}}><h5>Favorites</h5></Button>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Current Total Cost:
                        </div>
                        <div className="col-3">
                            $ {cartCostTotal.toFixed(2)}
                        </div>
                    </div>
                    <div className="row">
                        <TipCalculater total={cartCostTotal.toFixed(2)} />
                    </div>
                </div>
            </Container>
        </>
    );
};
 
export default MenuCart;
