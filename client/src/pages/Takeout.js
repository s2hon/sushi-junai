import React from "react";
import Button from "../components/Button";
import {Row, Col, Card, CardImg, CardBody, CardDeck }from "reactstrap";


function Takeout () {

    return (
    <>
    <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h1 className="text-center">Use one of our partners for delivery:</h1>
        <CardDeck>
        <Card>
            <CardImg src={"./assets/019-salmon.png"}></CardImg>
            <CardBody className={"text-center"}>
            <a href={"https://www.grubhub.com"}>
                <Button type={"button"} btn={"btn btn1 btn-lrg"}><h3>Grubhub</h3></Button>
            </a>
            </CardBody>
        </Card>
        <Card>
            <CardImg src={"./assets/030-tuna.png"}></CardImg>
            <CardBody className={"text-center"}>
            <a href={"https://www.ubereats.com"}>
                <Button type={"button"} btn={"btn btn1 btn-lrg"}><h3>Uber Eats</h3></Button>
            </a>
            </CardBody>
        </Card>
        <Card>
            <CardImg src={"./assets/015-pan.png"}></CardImg>
            <CardBody className={"text-center"}>
            <a href={"https://www.postmates.com"}>
                <Button type={"button"} btn={"btn btn1 btn-lrg"}><h3>Postmates</h3></Button>
            </a>
            </CardBody>
        </Card>
        </CardDeck>
            
        </Col>
        
    </Row>
    
    </>
    )
}

export default Takeout;