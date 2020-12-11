import React, { useState } from "react";
import Container from "../Container";
import Row from "../Row";
import menu from "../../db/menu.json";
import MenuItems from "./MenuItems";
import MenuNav from "../MenuNav/index";
import Image from "../Image";
import vegIcon from "../AyceMenu/icons8-vegetarian-mark-48.png";
import gfIcon from "../AyceMenu/icons8-color-50.png";
import spicyIcon from "../FoodKey/icons8-chili-pepper-144.png";
import shellfishIcon from "../FoodKey/icons8-prawn-144.png";
import Counter from "../Counter";
import Vegetarian from "../FoodKey/Vegetarian";
import RawFish from "../FoodKey/Rawfish";
import GlutenFree from "../FoodKey/GlutenFree";

function Menu() {
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isSpicy, setIsSpicy] = useState(false);
    const [containsNoShellfish, setContainsNoShellfish] = useState(false);

    let alcMenu = menu.filter(item => item.menu === "ayce" || "alc");

    if (isVegetarian) {
        alcMenu = alcMenu.filter(item => item.vegetarian);
    }

    if (isGlutenFree) {
        alcMenu = alcMenu.filter(item => item.glutenFree);
    }

    if (isSpicy) {
        alcMenu = alcMenu.filter(item => item.spicy === false);
    }

    if (containsNoShellfish) {
        alcMenu = alcMenu.filter(item => item.shellfish === false);
    }


    const appetizers = alcMenu.filter(item => item.category === "Appetizer");
    const salads = alcMenu.filter(item => item.category === "Salad");
    const soups = alcMenu.filter(item => item.category === "Soup/Noodles");
    const rice = alcMenu.filter(item => item.category === "Rice");
    const classicRolls = alcMenu.filter(item => item.category === "Classic Roll/Hand Roll");
    const sushi = alcMenu.filter(item => item.category === "Sushi");
    const chefsSpecial = alcMenu.filter(item => item.category === "Chef’s Special Rolls");
    const tempuraRolls = alcMenu.filter(item => item.category === "Tempura Rolls");
    const bakedRolls = alcMenu.filter(item => item.category === "Baked Rolls");
    const desserts = alcMenu.filter(item => item.category === "Desserts");
    const entrees = alcMenu.filter(item => item.category === "entree");
    const sushiSashimi = alcMenu.filter(item => item.category === "sushi and sashimi");
    const platters = alcMenu.filter(item => item.category === "platters");
    //eventually users will be able to favorite items straight from the menu (if logged-in) 

    function handleInputChangeVeg() {
        setIsVegetarian(!isVegetarian);
    }

    function handleInputChangeGF() {
        setIsGlutenFree(!isGlutenFree);
    }

    function handleInputChangeSpicy() {
        setIsSpicy(!isSpicy);
    }
    function handleInputChangeShellfish() {
        setContainsNoShellfish(!containsNoShellfish);
    }
        return (
            <>
                <Counter />
                <Container>
                    <div className="menu-container">
                        <Row>
                            <h1>A La Carte Menu</h1><hr />
                        </Row>
                        <Row className="sticky-top menuOptions">
                            <MenuNav />
                            <span className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="vegetarianCheckbox" onChange={handleInputChangeVeg} value="vegetarian" />
                                <label className="form-check-label" for="vegetarianCheckbox"><Image src={vegIcon} width="18" alt="Vegetarian" />Vegetarian </label>
                            </span>
                            <span className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="glutenFreeCheckbox" onChange={handleInputChangeGF} value="glutenFree" />
                                <label className="form-check-label" for="glutenFreeCheckbox"><Image src={gfIcon} width="18" alt="Gluten Free" />Gluten Free (order without sauce or with tamari) </label>
                            </span>
                            <span className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="spicyCheckbox" onChange={handleInputChangeSpicy} value="spicy" />
                                <label className="form-check-label" for="spicyCheckbox"><Image src={spicyIcon} width="18" alt="Not Spicy" />Not Spicy </label>
                            </span>
                            <span className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="shellfishCheckbox" onChange={handleInputChangeShellfish} value="shellfish" />
                                <label className="form-check-label" for="shellfishCheckbox"><Image src={shellfishIcon} width="18" alt="Shellfish Free" />Shellfish Free </label>
                            </span>
                        </Row>
                        <Row>
                            <div className="section-head"><h2 id="appetizers">Appetizers</h2></div>
                            <Container>
                                {
                                    appetizers.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>

                        <Row>
                            <div className="section-head"><h2 id="salad">Salad</h2></div>
                            <Container>
                                {
                                    salads.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>
                        <Row>
                            <div className="section-head"><h3 id="soup">Soup/Noodles</h3></div>
                            <Container>
                                {
                                    soups.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>
                        <Row>
                            <div className="section-head"><h2 id="rice">Rice Entree</h2></div>
                            <Container>
                                {
                                    rice.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>
                        <Row>
                            <div className="section-head"><h2 id="entree">Entrees</h2></div>
                            <Container>
                                {
                                    entrees.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>
                        <Row>
                            <div className="section-head"><h2 id="sushiSashimi">Sushi & Sashimi</h2></div>
                            <Container>
                                {
                                    sushiSashimi.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>
                        <Row>
                            <div className="section-head"><h2 id="platters">Sashimi Platters (chef's choice)</h2></div>
                            <Container>
                                {
                                    platters.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>
                        <Row>
                            <div className="section-head"><h2 id="classicRoll">Classic Roll/Hand Roll</h2></div>
                            <Container>
                                {
                                    classicRolls.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>
                        <Row>
                            <div className="section-head"><h2 id="sushi">Sushi (Nigiri)</h2></div>
                            <Container>
                                {
                                    sushi.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>
                        <Row>
                            <div className="section-head"><h2 id="chefsSpecial">Chef's Special Rolls</h2></div>
                            <Container>
                                {
                                    chefsSpecial.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>
                        <Row>
                            <div className="section-head"><h2 id="tempura">Tempura (Fried) Rolls</h2></div>
                            <Container>
                                {
                                    tempuraRolls.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>
                        <Row>
                            <div className="section-head"><h2 id="bakedRolls">Baked Rolls</h2></div>
                            <Container>
                                {
                                    bakedRolls.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>
                        <Row>
                            <div className="section-head"><h2 id="desserts">Desserts</h2></div>
                            <Container>
                                {
                                    desserts.map((item, idx) => {
                                        let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                        if (item.onlyOrderOnce) {
                                            oncePerOrder = "red";
                                        }
                                        return (
                                            <div className="card menu-card text-center">
                                                <div className="card-body d-flex justify-content-between">
                                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                    </MenuItems>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Container>
                        </Row>

                        <RawFish />
                        <GlutenFree />
                        <Vegetarian />
                    </div>
                </Container>
            </>
        );
    }

export default Menu;