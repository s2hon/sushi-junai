import React from "react";
import Container from "../Container";
import Row from "../Row";
import menu from "../../db/menu.json";
import MenuItems from "./MenuItems";

function Menu(props) {
    const drinkMenu = menu.filter(item => item.menu === "drinks");
    const sake = drinkMenu.filter(item => item.category === "sake");
    const wine = drinkMenu.filter(item => item.category === "wine");
    const beer = drinkMenu.filter(item => item.category === "beer");
    const softDrinks = drinkMenu.filter(item => item.category === "soft drinks")
    return (
        <>
            <Container>
                <Row>
                    <h3>Drink Menu</h3>
                </Row>
                <Row>
                    <h4 id="Sake">Sake</h4>
                    <Container>
                        {
                            sake.map((item, idx) => {
                                return (
                                    <div className="card text-center">
                                        <div className="card-body d-flex justify-content-between">
                                            <MenuItems key={idx} name={item.name} price={item.price} description={item.description} subtitle={item.subtitle} size={item.size} smallPrice={item.smallPrice} largePrice={item.largePrice}>
                                            </MenuItems>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="Wine">Wine</h4>
                    <Container>
                        {
                            wine.map((item, idx) => {
                                return (
                                    <div className="card text-center">
                                        <div className="card-body d-flex justify-content-between">
                                            <MenuItems key={idx} name={item.name} glassPrice={item.glassPrice} bottlePrice={item.bottlePrice} origin={item.origin} >
                                            </MenuItems>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="Beer">Beer</h4>
                    <Container>
                        {
                            beer.map((item, idx) => {
                                return (
                                    <div className="card text-center">
                                        <div className="card-body d-flex justify-content-between">
                                            <MenuItems key={idx} name={item.name} size={item.size} price={item.price} >
                                            </MenuItems>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="Soft Drinks">Soft Drinks</h4>
                    <Container>
                        {
                            softDrinks.map((item, idx) => {
                                return (
                                    <div className="card text-center">
                                        <div className="card-body d-flex justify-content-between">
                                            <MenuItems key={idx} name={item.name} price={item.price} drinks={item.drinks} >
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