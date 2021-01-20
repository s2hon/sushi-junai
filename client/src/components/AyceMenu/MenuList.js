import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Container from "../Container";
import Row from "../Row";
import menu from "../../db/menu.json";
import MenuItems from "../MenuItems";
import MenuNav from "../MenuNav"
import Button from "../Button";
import Image from "../Image";
import "./menu.css"
import "../../css/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Col from "../Col";
import Scrollup from "../ScrollUp/index";
import Counter from "../Counter";
import vegIcon from "../FoodKey/icons8-vegetarian-mark-144.png";
import gfIcon from "../FoodKey/icons8-no-gluten-144.png";
import Vegetarian from "../FoodKey/Vegetarian";
import RawFish from "../FoodKey/Rawfish";
import GlutenFree from "../FoodKey/GlutenFree";
import Shellfish from "../FoodKey/Shellfish";
import Spicy from "../FoodKey/Spicy";
import SO from "../FoodKey/SO";
import YumYum from "../FoodKey/YumYum";
import BackButton from "../BackButton/BackButton";
import VisibleNotification from "../Notification";
import StaffPick from "../FoodKey/StaffPick";
import Popular from "../FoodKey/Popular";
import HeaderTopbar from "../HeaderTopbar";
import Header from "../DineinHeader";
import Tour from "../Tour"

function Menu(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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
    const { pastOrders } = props

    const currentQty = arr => arr.reduce((sum, { quantity }) => sum + quantity, 0);
    const currentQtyTotal = currentQty(menuCart);

    const limitedItem = [
    'Screaming "O"',
    'White "O"',
    "Beef",
    "Conch (Makigai)",
    "Tako Wasabi",
    "Sweet Shrimp (Ama Ebi)",
    "Sashimi Special",
    "Mochi Ice Cream"]

    const currentCartItems = menuCart.map(menuCart => menuCart.name)
    const pastCartItems = pastOrders.map(pastOrders => pastOrders.name)
    const allCartItems = [...currentCartItems, ...pastCartItems]
    let used =  allCartItems.filter(item => limitedItem.includes(item))
    return (
        <>
            <HeaderTopbar style ={{zIndex: "9999"}}/>
            <Header/>
            <Counter />
            
            <Container>
                <div className="menu-container" id="top">
                    <Row className="title-bar">
                        <h1 className="center" style={{paddingLeft: "3%"}}><BackButton />All-You-Can-Eat Menu</h1>
                        <Button btn="float-right btn btn1 zero">Tutorial</Button>
                    </Row>
                    <hr />
                    <Row className="sticky-top menuOptions two">
                        <MenuNav />
                        <Container>
                            <Col>
                                <span className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="vegetarianCheckbox" onChange={handleInputChangeVeg} value="vegetarian" />
                                    <label className="form-check-label" for="vegetarianCheckbox"><Image src={vegIcon} width="18" alt="Vegetarian" />Vegetarian </label>
                                </span>
                                <span className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="glutenFreeCheckbox" onChange={handleInputChangeGF} value="glutenFree" />
                                    <label className="form-check-label" for="glutenFreeCheckbox"><Image src={gfIcon} width="18" alt="Gluten Free" />Gluten Free (must order without sauce) </label>
                                </span>
                            </Col>
                            <Col>
                                <span className="four">
                                    <Link to="/ordersummary"><Button type="button" btn="btn btn1 float-right">Sushi Cart ({currentQtyTotal})</Button></Link>
                                </span>
                                <span>
                                    <Link to="/drinks"><Button type="button" btn="btn btn1 float-right">Drinks</Button></Link>
                                </span>
                            </Col>
                        </Container>
                        <VisibleNotification/>
                    </Row>

                    <Row>
                        <div className="section-head"><h2><span id="appetizers" className="anchor"></span>APPETIZERS</h2></div>

                        <Container>
                            {
                                appetizers.map((item, idx) => {
                                    let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                    if (item.onlyOrderOnce) {
                                        oncePerOrder = "red";
                                    }
                                    return (
                                        <div className="card menu-card text-center">
                                            <div className="card-body d-flex justify-content-between three">
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                    <Button id={item.name} type="button" btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }} onetime={used.includes(item.name)}
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
                        <div className="section-head"><h2><span id="salad" className="anchor"></span>SALAD</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
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
                        <div className="section-head"><h2><span id="soup" className="anchor"></span>SOUP/NOODLES</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
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
                        <div className="section-head"><h2><span className="anchor" id="rice"></span>RICE</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
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
                        <div className="section-head"><h2><span className="anchor" id="classicRoll"></span>CLASSIC ROLL/HAND ROLL</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
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
                        <div className="section-head"><h2><span className="anchor" id="sushi"></span>SUSHI (NIGIRI)</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }} onetime={used.includes(item.name)}
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
                        <div className="section-head"><h2><span className="anchor" id="chefsSpecials"></span>CHEF'S SPECIALS</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }} onetime={used.includes(item.name)}
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
                        <div className="section-head"><h2><span className="anchor" id="tempura"></span>TEMPURA (FRIED) ROLLS</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
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
                        <div className="section-head"><h2><span className="anchor" id="bakedRolls"></span>BAKED ROLLS</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
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
                        <div className="section-head"><h2><span className="anchor" id="desserts"></span>DESSERTS</h2></div>
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
                                                <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree} spicy={item.spicy} shellfish={item.shellfish} popular={item.popular} staffpick={item.staffpick}>
                                                    <Button btn={"float-right btn btn1"} function={() => {
                                                        props.addItem(item)
                                                    }} onetime={used.includes(item.name)}
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
            <Tour />
        </>
    );
}

export default Menu;
