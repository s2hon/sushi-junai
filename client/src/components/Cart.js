import React from 'react';
import { Link } from "react-router-dom";
import CartItem from './CartItem';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import Nav from './Nav/index';

=======
import Nav from "./Nav";
import Container from "./Container";
import { Table } from 'reactstrap';
import Row from './Row';
>>>>>>> edabaac1b4533d1c076f16ab702f7919d1992108


<<<<<<< HEAD
    if(props.shoppingCart){
        if(props.shoppingCart.length === 0)
        {
            return (
                <React.Fragment>
                    <div>
                        <Nav/>
                    </div>
                        <h1>order some sushi with a dining staff!</h1>
                </React.Fragment>
            )
        }
        props.shoppingCart.forEach((item) => {
            count += item.quantity
            total += item.price*item.quantity;
        });
    }

    return (
        <React.Fragment>
            <div>
                <Nav/>
            </div>
            <div className="cart">
                <div className="cartRow">
                    <div className="cartRowflex">
                        <div className="cartLeft">
                            <div className="cartHeader">
                                <Link to="/" className="backButton">{"<"}</Link>
                                <span className="cartHeading">Order Summary</span>
                            </div>
                            <div className="cartSummary">
                                <span className="first">Items ({count})</span>
                                <span className="second">Qty</span>
                                <span className="third">Price</span>
                            </div>
                            <div className="cardTable">
                                {
                                    props.shoppingCart.map(item => <CartItem incrementItem={props.incrementItem} decrementItem={props.decrementItem} removeItem={props.removeItem} changeItem={props.changeItem} {...item}/>)
                                }
                            </div>
                        </div>
                        <div className="cartRight">
                            <div className="cartRightTop">
                                <div className="summaryHeader">Total</div>
                                <div className="price total">
                                    <span>Items ({count}) : ${total}</span>
                                </div>
                            </div>
                            <div className="price orderTotal">
                                <span className="centerVertically">
                                    You just saved:
                                </span>
                                <span className="centerVertically">
                                    ${total-32.95}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
=======
const Cart = (props) => {
    const { shoppingCart } = props
    const total = shoppingCart.reduce((acc, val) => acc + val.price, 0)
    const count = shoppingCart.length
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
                </tbody>
            </Table>
        </Container>
        </>
>>>>>>> edabaac1b4533d1c076f16ab702f7919d1992108
    );
};

export default Cart;