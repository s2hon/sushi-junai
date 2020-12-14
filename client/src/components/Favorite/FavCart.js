import React from 'react';
import FavCartItem from './FavCartItem';
import Container from "../Container";
import { Table } from 'reactstrap';
import Row from '../Row';
import { Button } from 'reactstrap';


const FavCart = (props) => {
    const { favCart } = props
    const count = favCart.length
  
    if (count === 0) {
        return (   
        <>
        <Container> 
        <div className="menu-container">
            <Table>
                <thead>
                    <tr>
                    <th> <h1>Item (0)</h1></th>
                    <th>Category</th>
                    </tr>
                    <tbody>
                        <h3>Go ahead and add SOY favorites
                        <br/> 
                        and MAKI my day! 
                        </h3>
                    </tbody>
                </thead>
            </Table>
            </div>
        </Container>
        </>
    )}

    return (
        <React.Fragment>
            <Container>
            <div className="menu-container">
                <Row><h3 className="cartHeading">My Favorites ({count})</h3></Row>
                <Table bordered striped>
                    <thead>
                        <tr>
                        <th>Item</th>
                        <th>Category</th>
                        <th> Unlike </th>
                        </tr>
                    </thead>
                    <tbody>
                        {favCart.map((item, idx) => <FavCartItem key={idx} item={item}/ > )}
                        <tr>
                            <Button type={"button"}className={"btn btn1"}>Add for future reference</Button>
                        </tr>
                    </tbody>
                </Table>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default FavCart;