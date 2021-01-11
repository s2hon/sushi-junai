import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Button from "../../components/Button";


export default function LunchButton () {
    return (
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center" style={{ marginTop: 50 }}>
                
                <Link to="/lunch">
                    <Button type={"button"} btn={"btn btn1 btn-lrg"}><h1 style={{ color: "#E6D9D3" }}><strong>Lunch Special</strong></h1><h3>Monday - Friday til 3 PM</h3>
                    </Button>
                </Link>
            </Col>
        </Row>
    )
}

