import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/index";
import Container from "../components/Container";
import {Row, Col} from "reactstrap";
import Button from "../components/Button";
import data from "../db/store.json";
import { useStoreContext } from '../utils/GlobalStore';
import HomeCarousel from "../components/HomeCarousel"

function Home(props) {
    const [state] = useStoreContext();

    return (
    <React.Fragment>
        <Container>
            <Row>
                {
                    data.map((data, idx) => {
                        return (
                
                                <Card key={idx} location={data.location} phone={data.phone} address={data.address}
                                mon={data.mon} tue={data.tue} wed={data.tue} thu={data.thu} fri={data.fri} sat={data.sat} sun={data.sun}>
                                </Card>
                        
                        )
                    })
                }
            </Row>
            <Row >
                <Col sm="12" md={{ size: 6, offset: 3 }} lg={{size: 6, offset: 3}}>
                <HomeCarousel />
                </Col>
            </Row>
            <Row>
                <Col>
                <a href={"https://www.yelp.com/biz/sushi-junai-austin"}>
                    <Button type={"button"} btn={"btn btn-dark"}>Reservations</Button>
                </a>
                </Col>
                <Col >
                <Link to={!state.userLoggedIn ? "/login": "/choice"}>
                    <Button type={"button"} btn={"btn btn-dark"}>Dine In</Button>
                </Link>    
                </Col>
                <Col>
                <a href={"https://www.yelp.com/order/v2/cart/954de1b27f3ee7705f2ca2d2c8336670"}>
                        <Button type={"button"} btn={"btn btn-dark"}>Carry Out</Button>
                        </a>
                </Col>
            </Row>
            
        </Container>
    </React.Fragment>);
}

export default Home;