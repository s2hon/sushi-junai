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
    const chefsSpecial = ayceMenu.filter(item => item.category === "Chef’s Special Rolls");
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
                    <Button>Appetizers</Button>
                    <Button>Salads</Button>
                    <Button>Soup/Noodles</Button>
                    <Button>Rice</Button>
                    <Button>Classic Rolls/Hand Rolls</Button>
                    <Button>Sushi</Button>
                    <Button>Chef's Special Rolls</Button>
                    <Button>Tempura Rolls</Button>
                    <Button>Baked Rolls</Button>
                    <Button>Desserts</Button>
                </Row>
                <Row>
                    <h4 id="appetizers">Appetizers</h4>
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
                    <h4 id="salad">Salad</h4>
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
                    <h4 id="soup">Soup/Noodles</h4>
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
                <Row>
                    <h4 id="rice">Rice</h4>
                    <Container>
                        {
                            rice.map(item => {
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
                    <h4 id="classicRoll">Classic Roll/Hand Roll</h4>
                    <Container>
                        {
                            classicRolls.map(item => {
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
                    <h4 id="sushi">Sushi <i className="fas fa-fish"></i></h4>
                    <Container>
                        {
                            sushi.map(item => {
                                let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                if (item.onlyOrderOnce) {
                                    oncePerOrder = "red";
                                }
                                return (<Card>
                                    <MenuItems key={item.name} name={item.name} price={item.price} description={item.description} fish={""} oncePerOrder={oncePerOrder}>
                                        <Button>+</Button>
                                    </MenuItems>
                                </Card>)
                            })
                        }
                    </Container>
                </Row>
                <Row>
                    <h4 id="chefsSpecial">Chef's Special Rolls</h4>
                    <Container>
                        {
                            chefsSpecial.map(item => {
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
                    <h4 id="tempura">Tempura Rolls</h4>
                    <Container>
                        {
                            tempuraRolls.map(item => {
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
                    <h4 id="bakedRolls">Baked Rolls</h4>
                    <Container>
                        {
                            bakedRolls.map(item => {
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
                    <h4 id="desserts">Desserts</h4>
                    <Container>
                        {
                            desserts.map(item => {
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
                    <h5><i className="fa fa-fish"></i> Raw Fish</h5>
                    <p>Consuming raw or undercooked fish increases the risk of food bourne diseases, especially in people with certain health conditions.</p>
                </Row>
                </Container>
                <Footer />
        </>
    );
}

export default Menu;