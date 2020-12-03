import React from "react";
import Nav from "./Nav/index";
import Container from "./Container";
import Row from "./Row";
import Footer from "./Footer/index";
import menu from "../db/menu.json";
import MenuItems from "./MenuItems";
import MenuNav from "./MenuNav/index"
import Button from "./Button";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";


function Menu(props) {
    const ayceMenu = menu.filter(item => item.menu === "ayce");
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
    
    return (
        <>
        <Nav />
        <MenuNav />
        <h3>All-You-Can-Eat Menu</h3> 
            <Container>
                <Row>
                    <h4 id="appetizers">Appetizers</h4> 
                    <Container>
                        {
                            appetizers.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (
                                <div className="card text-center">
                                    <div className="card-body d-flex justify-content-between">
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder}>
                                        <Button icon ={"fa fa-plus"} btn={"float-right"} function={() => {
                                            props.addItem(item)}}
                                            ></Button>
                                    </MenuItems>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </Container>
                </Row>

                <Row>
                    <h4 id="salad">Salad</h4>
                    <Container>
                        {
                            salads.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (
                                <div className="card text-center">
                                    <div className="card-body d-flex justify-content-between">
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder}>
                                        <Button icon ={"fa fa-plus"} btn={"float-right"} function={() => {
                                            props.addItem(item)}}
                                            ></Button>
                                    </MenuItems>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="soup">Soup/Noodles</h4>
                    <Container>
                        {
                            soups.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (
                                <div className="card text-center">
                                    <div className="card-body d-flex justify-content-between">
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder}>
                                        <Button icon ={"fa fa-plus"} btn={"float-right"} function={() => {
                                            props.addItem(item)}}
                                            ></Button>
                                    </MenuItems>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="rice">Rice Entree</h4>
                    <Container>
                        {
                            rice.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (
                                <div className="card text-center">
                                    <div className="card-body d-flex justify-content-between">
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder}>
                                        <Button icon ={"fa fa-plus"} btn={"float-right"} function={() => {
                                            props.addItem(item)}}
                                            ></Button>
                                    </MenuItems>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="classicRoll">Classic Roll/Hand Roll</h4>
                    <Container>
                        {
                            classicRolls.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (
                                <div className="card text-center">
                                    <div className="card-body d-flex justify-content-between">
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder}>
                                        <Button icon ={"fa fa-plus"} btn={"float-right"} function={() => {
                                            props.addItem(item)}}
                                            ></Button>
                                    </MenuItems>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="sushi">Sushi (Nigiri)<FontAwesomeIcon icon={faFish} /></h4>
                    <Container>
                        {
                            sushi.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (
                                <div className="card text-center">
                                    <div className="card-body d-flex justify-content-between">
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder}>
                                        <Button icon ={"fa fa-plus"} btn={"float-right"} function={() => {
                                            props.addItem(item)}}
                                            ></Button>
                                    </MenuItems>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="chefsSpecial">Chef's Special Rolls</h4>
                    <Container>
                        {
                            chefsSpecial.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (
                                <div className="card text-center">
                                    <div className="card-body d-flex justify-content-between">
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder}>
                                        <Button icon ={"fa fa-plus"} btn={"float-right"} function={() => {
                                            props.addItem(item)}}
                                            ></Button>
                                    </MenuItems>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="tempura">Tempura (Fried) Rolls</h4>
                    <Container>
                        {
                            tempuraRolls.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (
                                <div className="card text-center">
                                    <div className="card-body d-flex justify-content-between">
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder}>
                                        <Button icon ={"fa fa-plus"} btn={"float-right"} function={() => {
                                            props.addItem(item)}}
                                            ></Button>
                                    </MenuItems>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="bakedRolls">Baked Rolls</h4>
                    <Container>
                        {
                            bakedRolls.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (
                                <div className="card text-center">
                                    <div className="card-body d-flex justify-content-between">
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder}>
                                        <Button icon ={"fa fa-plus"} btn={"float-right"} function={() => {
                                            props.addItem(item)}}
                                            ></Button>
                                    </MenuItems>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="desserts">Desserts</h4>
                    <Container>
                        {
                            desserts.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (
                                <div className="card text-center">
                                    <div className="card-body d-flex justify-content-between">
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder}>
                                        <Button icon ={"fa fa-plus"} btn={"float-right"} function={() => {
                                            props.addItem(item)}}
                                            ></Button>
                                    </MenuItems>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h5 id="rawfish">Raw Fish <i className="fa fa-fish"></i></h5>
                    <Container>
                        <p>Consuming raw or undercooked fish increases the risk of food bourne diseases, especially in people with certain health conditions.</p>
                    </Container>
                </Row>
                </Container>
                <Footer />
        </>
    );
}

export default Menu;