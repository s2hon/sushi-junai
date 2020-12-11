import React from 'react';
import FavCartItem from './FavCartItem';
import Nav from "./Nav";
import Container from "./Container";
import { Table } from 'reactstrap';
import Row from './Row';
import { Button } from 'reactstrap';


const FavCart = (props) => {
    const { favCart } = props
    const count = favCart.length

    if (count === 0) {
        return (
            <>
                <Nav />
                <Container>
                    <Table>
                        <thead>

                        </thead>
                    </Table>
                </Container>
            </>
        )
    }

    return (
        <>
            <Nav />
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
                        {favCart.map((item, idx) => <FavCartItem key={idx} item={item} />)}
                        <tr>
                            <Button>Add for future reference</Button>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default FavCart;