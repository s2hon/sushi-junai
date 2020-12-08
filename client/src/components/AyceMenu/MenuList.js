import React, { useState } from "react";
import { Link } from "react-router-dom"
import Container from "../Container";
import Row from "../Row";
import menu from "../../db/menu.json";
import MenuItems from "../MenuItems";
import MenuNav from "../MenuNav/index"
import Button from "../Button";
import Image from "../Image";
import "./menu.css"
import "../../css/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import vegIcon from "./icons8-vegetarian-mark-48.png";
import gfIcon from "./icons8-color-50.png";
import fishIcon from "./icons8-dressed-fish-50.png";
import Col from "../Col";
import Scrollbar from "../ScrollUp/index";
import Counter from "../Counter";

function Menu(props) {
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

    const { menuCart } = props
    const currentQty = arr => arr.reduce((sum, { quantity }) => sum + quantity, 0);
    const currentQtyTotal = currentQty(menuCart);

    return (
        <>
            <Counter/>
            <Container>
                <div className="menu-container">
                    <Row>
                        <h1>All-You-Can-Eat Menu</h1><hr />
                    </Row>
                    <Row className="sticky-top menuOptions">
                        <Container>
                            <MenuNav />
                            <Col>
                                <span className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="vegetarianCheckbox" onChange={handleInputChangeVeg} value="vegetarian" />
                                    <label className="form-check-label" for="vegetarianCheckbox"><Image src={vegIcon} width="18" alt="Vegetarian" />Vegetarian </label>
                                </span>
                                <span className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="glutenFreeCheckbox" onChange={handleInputChangeGF} value="glutenFree" />
                                    <label className="form-check-label" for="glutenFreeCheckbox"><Image src={gfIcon} width="18" alt="Gluten Free" />Gluten Free (order without sauce) </label>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <Link to="/ordersummary"><Button type="button" btn="btn btn1 float-right">Order Summary ({currentQtyTotal})</Button></Link>
                                </span>
                                <span>
                                    <Link to="/favorite"><Button type="button" btn="btn btn1 float-right">Favorites</Button></Link>
                                </span>
                            </Col>
                        </Container>
                    </Row>

                    <Row>
                        <div className="section-head"><h2 id="appetizers">APPETIZERS</h2></div>

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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                    <Button id={item.name} type="button" btn={"float-right btn btn1"} onClick={() => {
                                                        props.addItem(item) }} 
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </Button>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>

                    <Row>
                        <div className="section-head"><h2 id="salad">SALAD</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }} 
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </Button>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2 id="soup">SOUP/NOODLES</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </Button>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2 id="rice">RICE</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </Button>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2 id="classicRoll">CLASSIC ROLL/HAND ROLL</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </Button>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2 id="sushi">SUSHI (NIGIRI)</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </Button>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2 id="chefsSpecials">CHEF'S SPECIALS</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </Button>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2 id="tempura">TEMPURA (FRIED) ROLLS</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </Button>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2 id="bakedRolls">BAKED ROLLS</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </Button>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <div className="section-head"><h2 id="desserts">DESSERTS</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </Button>
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

                    <Row>
                        <h5 id="glutenFree">Gluten Free <Image src={gfIcon} width="18" alt="Gluten Free" /></h5>
                        <Container>
                            <p>Request no sauce when ordering.</p>
                        </Container>
                    </Row>
                    <Row>
                        <h5 id="vegetarian">Vegetarian <Image src={vegIcon} width="18" alt="Vegetarian" /></h5>
                    </Row>
                </div>
            </Container>
            <Scrollbar />
        </>
    );
}

export default Menu;