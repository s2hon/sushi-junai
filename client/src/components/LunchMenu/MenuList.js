import React from "react";
import Container from "../Container";
import Row from "../Row";
import Scrollup from "../ScrollUp/index";
import menu from "../../db/menu.json";
import MenuItems from "./MenuItems";
import RawFish from "../FoodKey/Rawfish";
import HouseSalad from "../FoodKey/Salad";

function Menu() {
    const lunchMenu = menu.filter(item => item.menu === "lunch");
    const combos = lunchMenu.filter(item => item.category === "combo");
    const lunchSpecials = lunchMenu.filter(item => item.category === "Lunch Special");
    const lunchBox = lunchMenu.filter(item => item.category === "Lunch Box");
    const houseSpecial = lunchMenu.filter(item => item.category === "house special");
    return (
        <>
            <Container>
            <div className="menu-container" id="top">
                <Row>
                    <h1>Lunch Menu</h1><hr />
                </Row>
                <Row>
                <div className="section-head"><h2 id="HouseSpecials">House Specials</h2>
                <h5>Sushi Junai 1 exclusives</h5></div>
                    <Container>
                        {
                            houseSpecial.map((item, idx) => {
                                return (
                                    <div className="card menu-card text-center">
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
                <div className="section-head"><h2 id="LunchSpecials">Lunch Rice Specials</h2>
                <h5>Served with miso soup and house salad</h5></div>
                    <Container>
                        {
                            lunchSpecials.map((item, idx) => {
                                return (
                                    <div className="card menu-card text-center">
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
                <div className="section-head"><h2 id="Combos">Combos</h2>
                <h5>Served with house salad</h5></div>
                    <Container>
                        {
                            combos.map((item, idx) => {
                                return (
                                    <div className="card menu-card text-center">
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
                <div className="section-head"><h2 id="LunchBox">Lunch Box</h2>
                <h5>Served with miso soup, salad, mixed tempura, 2pcs pork gyoza, and rice in a bento box</h5></div>
                    <Container>
                        {
                            lunchBox.map((item, idx) => {
                                return (
                                    <div className="card menu-card text-center">
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
                    <RawFish />
                    <HouseSalad />
                </div>
            </Container>
            <Scrollup />
        </>
    );
}

export default Menu;