import React from "react";
import {Row }from "reactstrap";
import Container from "../components/Container";
import MenuItems from "../components/LunchMenu/MenuItems";
import RawFish from "../components/FoodKey/Rawfish";
import menu from "../db/menu.json"
import { Link } from "react-router-dom";

function ToGo () {

    const togo = menu.filter(item => item.menu === "togo")

    return (
    <>
    <div className="menu-container container">
    <h2 id="HouseSpecials" className="text-center">Order from our <Link to="/alacarte">A La Carte</Link> menu</h2>
        <Row>
        
        <div className="section-head">
            
            <h3>Downtown Austin (Sushi Junai 1): <a href="tel:512-322-2428">512-322-2428</a></h3>
            <hr />
            <h3>North Austin (Sushi Junai 2): <a href="tel:512-716-3922">512-716-3922</a></h3>
        </div>
        </Row>
        <Row>
        <div className="section-head">
            <h3 id="HouseSpecials">Only at Sushi Junai 1 - Exclusive To Go Combos Below</h3>
        </div>
            <Container>
                {
                    togo.map((item, idx) => {
                        return (
                            <div className="card menu-card text-center">
                                <div className="card-body d-flex justify-content-between">
                                    <MenuItems key={idx} name={item.name} price={item.price.toFixed(2)} description={item.description} servings={item.servings} fish={item.fish} >
                                    </MenuItems>
                                </div>
                            </div>
                        )
                    })
                }
                <RawFish/>
            </Container>
            
        </Row>
        
    </div>
    
                
    
    
    </>
    )
}

export default ToGo;