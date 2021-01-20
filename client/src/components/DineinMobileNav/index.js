import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import Image from "../Image";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Lunch from "./LunchButton";
import mobileIcon2 from "./sushi-icon.png";
import moment from "moment";
import './style.css';


export default class Nav extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;
        const currentHour = moment().format("HH");
        const currentDay = moment().day();

        return (
            <>
                <div className={`sidebar ${isMenuShow ? 'show' : ''}`}>
                    <ul className="navlist">
                        <li>
                        <p onClick={this.menuHandler}><FontAwesomeIcon icon={faAngleLeft}/></p>
                        </li>
                        <li>
                        <p onClick={this.setIsOpen(1)}>Menu</p>
                            <Collapse isOpen={1 === isOpen}>
                                <Card>
                                    <CardBody>
                                        <ul className="black-text submenu">
                                            <li className="black-text submenu"><Link className="mainFont black-text submenu" to="/dinein-drinks" onClick={this.menuHandler}>Drinks</Link></li>
                                            {currentHour<15 && (currentDay % 6 !== 0) ? <Lunch /> : ""}
                                            <li className="black-text submenu"><Link className="mainFont black-text submenu" to="/dinein-alacarte" onClick={this.menuHandler}>À La Carte</Link></li>
                                            <li className="black-text submenu"><Link className="mainFont black-text submenu" to="/rules" onClick={this.menuHandler}>All You Can Eat</Link></li>
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </li>
                    </ul>

                </div>

                <div className="navbtn" onClick={this.menuHandler}>
                    <Image src={mobileIcon2} alt={"sushi menu icon"} width="120%"/>
                </div>
            </>
        )
    }
}
