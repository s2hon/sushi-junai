import React from "react";
import Button from "../components/Button";
import {Row, Col, Card, CardTitle, CardImg, CardBody, CardDeck }from "reactstrap";

function Delivery() {

    return (<>
    <div className="menu-container container">
    <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h2 style={{padding:"30px"}}className="text-center">Use our partners for delivery:</h2>
        <CardDeck>
        <Card>
            <CardImg src={"./assets/019-salmon.png"}></CardImg>
            <CardTitle tag="h3" className="text-center">Downtown Austin</CardTitle>
            <CardBody className={"text-center"}>
            <a href={"https://www.grubhub.com/restaurant/sushi-junai-1612-lavaca-street-austin/2258883?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"}>
                <Button type={"button"} btn={"btn btn1 btn-lrg"}><h3>Grubhub</h3></Button>
            </a>
            </CardBody>
        </Card>
        <Card>
            <CardImg src={"./assets/030-tuna.png"}></CardImg>
            <CardTitle tag="h3" className="text-center">North Austin</CardTitle>
            <CardBody className={"text-center"}>
            <a href={"https://www.grubhub.com/restaurant/sushi-junai-2-2500-w-parmer-ln-100-austin/325162?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"}>
                <Button type={"button"} btn={"btn btn1 btn-lrg"}><h3>GrubHub</h3></Button>
            </a>
            </CardBody>
        </Card>
        </CardDeck>
            
        </Col>
        
    </Row>
    </div>
    </>)

}

export default Delivery;