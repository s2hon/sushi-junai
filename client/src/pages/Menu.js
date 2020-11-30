import React from "react";
import Nav from "../components/Nav";
import Counter from "../components/Counter";
import Container from "../components/Container";
import Row from "../components/Row";
import Footer from "../components/Footer";
import menu from "../menu";
import MenuItems from "../components/MenuItems"
import Card from "../components/Card";
import Button from "../components/Button"



function Menu(props) {

    

    const ayceMenu = menu.filter(item => item.menu === "ayce");
    const appetizers = ayceMenu.filter(item => item.category === "Appetizer");
    const salads = ayceMenu.filter(item => item.category === "Salad");
    const soups = ayceMenu.filter(item => item.category === "Soup/Noodles");
    const rice = ayceMenu.filter(item => item.category === "Rice");
    const classicRolls = ayceMenu.filter(item => item.category === "Classic Roll/Hand Roll");
    const sushi = ayceMenu.filter(item => item.category === "Sushi");
    const chefsSpecial = ayceMenu.filter(item => item.category === "Chef's Special Rolls");
    const tempuraRolls = ayceMenu.filter(item => item.category === "Tempura Rolls");
    const bakedRolls = ayceMenu.filter(item => item.category === "Baked Rolls");
    const desserts = ayceMenu.filter(item => item.category === "Desserts");
    return (
        <>
            <Nav />
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
                            appetizers.map(item => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                console.log(fishClass)
                                return (<Card>
                                    <MenuItems key={item.name} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                        <Button>+</Button>
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
                            salads.map(item => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                return (<Card>
                                    <MenuItems key={item.name} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                        <Button>+</Button>
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
                            soups.map(item => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }

                                let fishClass = ""; // Add fish icon to items with raw or undercooked fish
                                if (item.fish) {
                                    fishClass = "fa fa-fish";
                                }
                                return (<Card>
                                    <MenuItems key={item.name} name={item.name} price={item.price} description={item.description} fish={fishClass} oncePerOrder={oncePerOrder}>
                                        <Button>+</Button>
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