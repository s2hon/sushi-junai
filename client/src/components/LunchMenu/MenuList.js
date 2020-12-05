import React from "react";
import Container from "../Container";
import Row from "../Row";
import menu from "../../db/menu.json";
import MenuItems from "./MenuItems";

function Menu(props) {
    const lunchMenu = menu.filter(item => item.menu === "lunch");
    const combos = lunchMenu.filter(item => item.category === "combo");
    const lunchSpecials = lunchMenu.filter(item => item.category === "Lunch Special");
    const lunchBox = lunchMenu.filter(item => item.category === "Lunch Box");
    return (
        <>
            <Container>
                <Row>
                    <h3>Lunch Menu</h3>
                </Row>
                <Row>
                    <h4 id="LunchSpecials">Lunch Specials</h4>
                    <Container>
                        {
                            lunchSpecials.map((item, idx) => {
                                return (
                                    <div className="card text-center">
                                        <div className="card-body d-flex justify-content-between">
                                            <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} >
                                            </MenuItems>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="Combos">Combos</h4>
                    <Container>
                        {
                            combos.map((item, idx) => {
                                return (
                                    <div className="card text-center">
                                        <div className="card-body d-flex justify-content-between">
                                            <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} >
                                            </MenuItems>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="LunchBox">Lunch Box</h4>
                    <Container>
                        {
                            lunchBox.map((item, idx) => {
                                return (
                                    <div className="card text-center">
                                        <div className="card-body d-flex justify-content-between">
                                            <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} >
                                            </MenuItems>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Container>
                </Row>
            </Container>
        </>
    );
}

export default Menu;