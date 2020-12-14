import React, {useState} from "react";
import Container from "../Container";
import Row from "../Row";
import menu from "../../db/menu.json";
import MenuItems from "./MenuItems";

function Menu(props) {
    const [sj1, setsj1] = useState(false);
    const [sj2, setsj2] = useState(false);

    let drinkMenu = menu.filter(item => item.menu === "drinks");

    if (sj1) {
        drinkMenu = drinkMenu.filter(item => item.restaurant === "sj1" || item.restaurant === "both")
    }

    if (sj2) {
        drinkMenu = drinkMenu.filter(item => item.restaurant === "sj2" || item.restaurant === "both")
    }

    const sake = drinkMenu.filter(item => item.subcategory === "sake");
    const premiumSake = drinkMenu.filter(item => item.subcategory === "premium sake");
    const flavoredSake = drinkMenu.filter(item => item.subcategory === "flavored sake");
    const plumWine = drinkMenu.filter(item => item.category === "plum wine");
    const whiteWine = drinkMenu.filter(item => item.subcategory === "white");
    const sparklingWine = drinkMenu.filter(item => item.subcategory === "sparkling");
    const redWine = drinkMenu.filter(item => item.subcategory === "red");
    const beer = drinkMenu.filter(item => item.category === "beer");
    const softDrinks = drinkMenu.filter(item => item.category === "soft drinks")

    function handleInputChangeSJ1() {
        setsj1(!sj1);
    }

    function handleInputChangeSJ2() {
        setsj2(!sj2);
    }
    return (
        <>
            <Container>
                <div className="menu-container">
                    <Row>
                        <h1>Drink Menu</h1><hr />
                    </Row>
                    <Row className="sticky-top menuOptions">
                        <span class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="sj1Checkbox" onChange={handleInputChangeSJ1} value="sj1" />
                            <label class="form-check-label" for="sj1Checkbox">Sushi Junai 1 (Downtown) </label>
                        </span>
                        <span class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="sj2Checkbox" onChange={handleInputChangeSJ2} value="sj2" />
                            <label class="form-check-label" for="sj2Checkbox">Sushi Junai 2 (North Austin) </label>
                        </span>
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

                            <h4 className="subhead">Premium Sake</h4>
                            {
                                premiumSake.map((item, idx) => {
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
                            <h4 className="subhead">Flavored Sake</h4>
                            {
                                flavoredSake.map((item, idx) => {
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
                        <div className="section-head"><h2 id="Wine">Plum Wine</h2></div>
                        <Container>
                            {
                                plumWine.map((item, idx) => {
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
                            <h4 className="subhead">Sparkling</h4>
                            {
                                sparklingWine.map((item, idx) => {
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


                            <h4 className="subhead">White</h4>
                            {
                                whiteWine.map((item, idx) => {
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

                            <h4 className="subhead">Red</h4>
                            {
                                redWine.map((item, idx) => {
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