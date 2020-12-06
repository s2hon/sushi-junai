import React from "react";
import Container from "../Container";
import Row from "../Row";
import menu from "../../db/menu.json";
import MenuItems from "./MenuItems";
import fishIcon from "../AyceMenu/icons8-dressed-fish-50.png";
import Image from "../Image";

function Menu() {
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
                                            <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} >
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
                                            <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} >
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
                                            <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} >
                                            </MenuItems>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                        <h5 id="rawfish">Raw Fish <Image src={fishIcon} width="18" alt="Raw Fish" /></h5>
                        <Container>
                            <p>Consuming raw or undercooked fish increases the risk of food bourne diseases, especially in people with certain health conditions.</p>
                        </Container>
                    </Row>
            </Container>
        </>
    );
}

export default Menu;