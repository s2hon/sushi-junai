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
                <div className="menu-container">
                <Row>
                    <h1>Drink Menu</h1><hr />
                </Row>
                <Row>
                <div className="section-head"><h2 id="Sake">Sake</h2></div>
                    <Container>
                        {
                            sake.map((item, idx) => {
                                return (
                                    <div className="card menu-card text-center">
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
                <div className="section-head"><h2 id="Wine">Wine</h2></div>
                    <Container>
                        {
                            wine.map((item, idx) => {
                                return (
                                    <div className="card menu-card text-center">
                                        <div className="card-body d-flex justify-content-between">
                                            <MenuItems key={idx} name={item.name} glassPrice={item.glassPrice} bottlePrice={item.bottlePrice} origin={item.origin} description={item.description} >
                                            </MenuItems>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                <div className="section-head"><h2 id="Beer">Beer</h2></div>
                    <Container>
                        {
                            beer.map((item, idx) => {
                                return (
                                    <div className="card menu-card text-center">
                                        <div className="card-body d-flex justify-content-between">
                                            <MenuItems key={idx} name={item.name} size={item.size} price={item.price} description={item.description} >
                                            </MenuItems>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                <div className="section-head"><h2 id="Soft Drinks">Soft Drinks</h2></div>
                    <Container>
                        {
                            softDrinks.map((item, idx) => {
                                return (
                                    <div className="card menu-card text-center">
                                        <div className="card-body d-flex justify-content-between">
                                            <MenuItems key={idx} name={item.name} price={item.price} drinks={item.drinks} description={item.description} >
                                            </MenuItems>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                </div>
            </Container>
        </>
    );
}

export default Menu;