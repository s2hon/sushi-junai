import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Grid from "../components/OrderSummary/Grid";

function OrderSummary(props) {
    return (
        <>
            <Nav></Nav>
            <Grid />
            <Footer />
        </>
        );
}

export default OrderSummary;