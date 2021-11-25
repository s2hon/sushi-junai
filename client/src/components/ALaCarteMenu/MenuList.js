import React, { useState } from "react";
import Container from "../Container";
import Row from "../Row";
import menu from "../../db/menu.json";
import MenuItems from "./MenuItems";
import MenuNav from "../MenuNav/index";
import Scrollup from "../ScrollUp/index";
import Image from "../Image";
import vegIcon from "../FoodKey/icons8-vegetarian-mark-144.png";
import gfIcon from "../FoodKey/icons8-no-gluten-144.png";
import Vegetarian from "../FoodKey/Vegetarian";
import RawFish from "../FoodKey/Rawfish";
import GlutenFree from "../FoodKey/GlutenFree";
import Shellfish from "../FoodKey/Shellfish";
import Spicy from "../FoodKey/Spicy";
import SO from "../FoodKey/SO";
import YumYum from "../FoodKey/YumYum";
import StaffPick from "../FoodKey/StaffPick";
import Popular from "../FoodKey/Popular";
import BackButton from "../BackButton";

function Menu() {
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isGlutenFree, setIsGlutenFree] = useState(false);

    let alcMenu = menu.filter(item => item.menu === "ayce" || "alc");

    if (isVegetarian) {
        alcMenu = alcMenu.filter(item => item.vegetarian);
    }

    if (isGlutenFree) {
        alcMenu = alcMenu.filter(item => item.glutenFree);
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

    function handleInputChangeVeg() {
        setIsVegetarian(!isVegetarian);
    }

    function handleInputChangeGF() {
        setIsGlutenFree(!isGlutenFree);
    }

    return (
        <>
            <Container>
                <div className="menu-container" id="top">
                    <Row>
                        <h1 style={{paddingLeft: "3%"}}><BackButton /> À La Carte Menu</h1><hr />
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
                    </Row>
                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="appetizers"></span>Appetizers</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>

                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="salad"></span>Salad</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h3><span className="anchor" id="soup"></span>Soup/Noodles</h3></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="rice"></span>Rice Entree</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="entree"></span>Entrees</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="sushiSashimi"></span>Sushi & Sashimi</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="platters"></span>Sashimi Platters (chef's choice)</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="classicRoll"></span>Classic Roll/Hand Roll</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="sushi"></span>Sushi (Nigiri)</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="chefsSpecials"></span>Chef's Special Rolls</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="tempura"></span>Tempura (Fried) Rolls</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="bakedRolls"></span>Baked Rolls</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2><span className="anchor" id="desserts"></span>Desserts</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Container>
                    <br/>
                        <Popular />
                        <StaffPick />
                        <hr />
                        <RawFish />
                        <GlutenFree />
                        <Vegetarian />
                        <Shellfish />
                        <Spicy />
                        <hr />
                        <SO />
                        <YumYum />
                    </Container>
                    </div>
                </Container>
                <Scrollup />
        </>
    );
}

export default Menu;