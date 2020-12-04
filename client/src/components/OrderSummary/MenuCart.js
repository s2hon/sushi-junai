import React from 'react';
import { Link } from "react-router-dom";
import MenuCartItem from './MenuCartItem';
import Container from "../Container";
import { Table } from 'reactstrap';
import Row from '../Row';
import TipCalculater from '../TipCalculater';
import Button from '../Button';


const MenuCart = (props) => {
    const { menuCart } = props
    const total = menuCart.reduce((acc, val) => acc + val.price, 0)
    const count = menuCart.length

    if (count === 0) {
        return (
            <>
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
                </Container>
            </>
        )
    }

    return (
        <>
            <Container>
                <Row><h3 className="cartHeading">Order Summary ({count})</h3></Row>
                <Table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menuCart.map((item, idx) => <MenuCartItem key={idx} item={item} removeItem={props.removeItem} />)}
                        <tr>
                            <Button type={"button"} btn={"btn btn-dark"}>Submit Order to Server</Button>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td>Total Cost:</td>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td>You just saved:</td>
                            <td>${(total - 32.95).toFixed(2)}</td>
                        </tr>
                        <TipCalculater total={total} />
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default MenuCart;