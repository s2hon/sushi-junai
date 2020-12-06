import React, {useState} from "react";
import Container from "../Container";
import Row from "../Row";
import menu from "../../db/menu.json";
import MenuItems from "./MenuItems";
import MenuNav from "../MenuNav/index";
import Image from "../Image";
import vegIcon from "../AyceMenu/icons8-vegetarian-mark-50.png";
import gfIcon from "../AyceMenu/icons8-no-gluten-50.png";
import fishIcon from "../AyceMenu/icons8-fish-food-50.png";

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
    //eventually users will be able to favorite items straight from the menu (if logged-in) 

    function handleInputChangeVeg(){
        setIsVegetarian(!isVegetarian);
    }

    function handleInputChangeGF(){
        setIsGlutenFree(!isGlutenFree);
    }

    return (
        <>
            <Container>
                <Row>
                    <h3>A La Carte Menu</h3>
                </Row>
                <Row>
                    <MenuNav />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="vegetarianCheckbox" onChange={handleInputChangeVeg} value="vegetarian" />
                            <label class="form-check-label" for="vegetarianCheckbox"><Image src={vegIcon} width="18" alt="Vegetarian" />Vegetarian </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="glutenFreeCheckbox" onChange={handleInputChangeGF}  value="glutenFree" />
                            <label class="form-check-label" for="glutenFreeCheckbox"><Image src={gfIcon} width="18" alt="Gluten Free" />Gluten Free (order without sauce) </label>
                    </div>
                </Row>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <h4 id="entree">Entrees</h4>
                        <Container>
                            {
                                entrees.map((item, idx) => {
                                    let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                    if (item.onlyOrderOnce) {
                                        oncePerOrder = "red";
                                    }
                                    return (
                                        <div className="card text-center">
                                            <div className="card-body d-flex justify-content-between">
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <h4 id="sushiSashimi">Sushi & Sashimi</h4>
                        <Container>
                            {
                                sushiSashimi.map((item, idx) => {
                                    let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                    if (item.onlyOrderOnce) {
                                        oncePerOrder = "red";
                                    }
                                    return (
                                        <div className="card text-center">
                                            <div className="card-body d-flex justify-content-between">
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <h4 id="platters">Sashimi Platters (chef's choice)</h4>
                        <Container>
                            {
                                platters.map((item, idx) => {
                                    let oncePerOrder = ""; // Give the heading a class of "red" if the item can only be ordered once
                                    if (item.onlyOrderOnce) {
                                        oncePerOrder = "red";
                                    }
                                    return (
                                        <div className="card text-center">
                                            <div className="card-body d-flex justify-content-between">
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
                                                </MenuItems>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Container>
                    </Row>
                    <Row>
                        <h4 id="sushi">Sushi (Nigiri)</h4>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
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
                                                <MenuItems key={idx} name={item.name} price={item.price} description={item.description} fish={item.fish} oncePerOrder={oncePerOrder} vegetarian={item.vegetarian} glutenFree={item.glutenFree}>
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
                </Container>
        </>
    );
}

export default Menu;