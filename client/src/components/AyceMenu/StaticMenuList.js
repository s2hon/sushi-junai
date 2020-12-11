import React, { useState } from "react";
import Container from "../Container";
import Row from "../Row";
import menu from "../../db/menu.json";
import MenuItems from "../MenuItems";
import MenuNav from "../MenuNav/index";
import Image from "../Image";
import vegIcon from "./icons8-vegetarian-mark-48.png";
import gfIcon from "./icons8-color-50.png";
import Vegetarian from "../FoodKey/Vegetarian";
import RawFish from "../FoodKey/Rawfish";
import GlutenFree from "../FoodKey/GlutenFree";
import Shellfish from "../FoodKey/Shellfish";
import Spicy from "../FoodKey/Spicy";

function Menu() {
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isGlutenFree, setIsGlutenFree] = useState(false);

    let ayceMenu = menu.filter(item => item.menu === "ayce");

    if (isVegetarian) {
        ayceMenu = ayceMenu.filter(item => item.vegetarian);
    }

    if (isGlutenFree) {
        ayceMenu = ayceMenu.filter(item => item.glutenFree);
    }


    const appetizers = ayceMenu.filter(item => item.category === "Appetizer");
    const salads = ayceMenu.filter(item => item.category === "Salad");
    const soups = ayceMenu.filter(item => item.category === "Soup/Noodles");
    const rice = ayceMenu.filter(item => item.category === "Rice");
    const classicRolls = ayceMenu.filter(item => item.category === "Classic Roll/Hand Roll");
    const sushi = ayceMenu.filter(item => item.category === "Sushi");
    const chefsSpecial = ayceMenu.filter(item => item.category === "Chef’s Special Rolls");
    const tempuraRolls = ayceMenu.filter(item => item.category === "Tempura Rolls");
    const bakedRolls = ayceMenu.filter(item => item.category === "Baked Rolls");
    const desserts = ayceMenu.filter(item => item.category === "Desserts");
    //eventually users will be able to favorite items straight from the menu (if logged-in) 

    function handleInputChangeVeg() {
        setIsVegetarian(!isVegetarian);
    }

    function handleInputChangeGF() {
        setIsGlutenFree(!isGlutenFree);
    }


    return (
        <>
            <Container>
                <div className="menu-container">
                    <Row>
                        <h1>All-You-Can-Eat Menu</h1><hr />
                    </Row>
                    <Row className="sticky-top menuOptions">
                        <MenuNav />
                        <span class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="vegetarianCheckbox" onChange={handleInputChangeVeg} value="vegetarian" />
                            <label class="form-check-label" for="vegetarianCheckbox"><Image src={vegIcon} width="18" alt="Vegetarian" />Vegetarian </label>
                        </span>
                        <span class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="glutenFreeCheckbox" onChange={handleInputChangeGF} value="glutenFree" />
                            <label class="form-check-label" for="glutenFreeCheckbox"><Image src={gfIcon} width="18" alt="Gluten Free" />Gluten Free (order without sauce or with tamari) </label>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2 id="soup">Soup/Noodles</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish}>
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
                    <Shellfish />
                    <Spicy />
                </div>
            </Container>
        </>
    );
}

export default Menu;