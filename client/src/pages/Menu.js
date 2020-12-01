import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Counter from "../components/Counter";
import Container from "../components/Container";
import Row from "../components/Row";
import Footer from "../components/Footer";
import menu from "../db/menu.json";
import MenuItems from "../components/MenuItems"
import Card from "../components/Card";
import Button from "../components/Button";



function Menu() {
    //order summary
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
            ...product,
            quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);

        console.log(cart)
    };

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
            <header>Items in cart </header>
            <Container>
                <Row>
                    <Counter></Counter>
                </Row>
                <Row>
                    <h3>All-You-Can-Eat Menu</h3>
                </Row>
                <Row>
                    <h4>Appetizers</h4>
                    <Container>
                        {
                            appetizers.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                // console.log(fishClass)
                                return (<Card>
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                        <Button function={() => addToCart(item)}>+</Button>
                                    </MenuItems>
                                </Card>)
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4>Salad</h4>
                    <Container>
                        {
                            salads.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                return (<Card>
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                        <Button function={() => addToCart(item)}>+</Button>
                                    </MenuItems>
                                </Card>)
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4>Soup/Noodles</h4>
                    <Container>
                        {
                            soups.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                return (<Card>
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                        <Button function={() => addToCart(item)}>+</Button>
                                    </MenuItems>
                                </Card>)
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4>Rice Entrees</h4>
                    <Container>
                        {
                            rice.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                return (<Card>
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                        <Button function={() => addToCart(item)}>+</Button>
                                    </MenuItems>
                                </Card>)
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4>Hand Roll (cone)</h4>
                    <Container>
                        {
                            classicRolls.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                return (<Card>
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                        <Button function={() => addToCart(item)}>+</Button>
                                    </MenuItems>
                                </Card>)
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4>Sushi (Nigiri) <i className="fas fa-fish"></i></h4>
                    <Container>
                        {
                            sushi.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (<Card>
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={""} oncePerOrder={oncePerOrder}>
                                        <Button function={() => addToCart(item)}>+</Button>
                                    </MenuItems>
                                </Card>)
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4>Chef's Special Rolls</h4>
                    <Container>
                        {
                            chefsSpecial.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                return (<Card>
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                        <Button function={() => addToCart(item)}>+</Button>
                                    </MenuItems>
                                </Card>)
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4>Tempura (Fried) Rolls</h4>
                    <Container>
                        {
                            tempuraRolls.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                return (<Card>
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                        <Button function={() => addToCart(item)}>+</Button>
                                    </MenuItems>
                                </Card>)
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4>Baked Rolls</h4>
                    <Container>
                        {
                            bakedRolls.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                return (<Card>
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                    <Button function={() => addToCart(item)}>+</Button>
                                    </MenuItems>
                                </Card>)
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4>Desserts</h4>
                    <Container>
                        {
                            desserts.map((item, idx) => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                return (<Card>
                                    <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                        <Button function={() => addToCart(item)}>+</Button>
                                    </MenuItems>
                                </Card>)
                            })
                        }
                    </Container>
                </Row>
                </Container>
                <Footer />
        </>
    );
}

export default Menu;