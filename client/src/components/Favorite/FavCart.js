import React from 'react';
import FavCartItem from './FavCartItem';
import Container from "../Container";
import { Table } from 'reactstrap';
import Row from '../Row';
import { Button } from 'reactstrap';


const FavCart = (props) => {
    const { favCart } = props
    const count = favCart.length
    // let tipFifteen = ".15";
    // let tipTwenty = ".2";
    // let tipEighteen= ".18";
    // let totalTip = (total*tipFifteen)
    

    if (count === 0) {
        return (   
        <>
        <Container> 
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
        </Container>
        </>
    )}

    return (
        <React.Fragment>
            <Container>
                <Row><h3 className="cartHeading">My Favorites ({count})</h3></Row>
                <Table>
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
                            <Button>Add for future reference</Button>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </React.Fragment>
    );
};

export default FavCart;