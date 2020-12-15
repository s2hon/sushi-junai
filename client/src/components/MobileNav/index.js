import React, { Component } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import Image from "../Image";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import menus from "../../db/nav.json";
import mobileIcon2 from "./sushi-icon.png";
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

        return (
            <>
                <div className={`sidebar ${isMenuShow ? 'show' : ''}`}>
                    <ul className="navlist">
                        <li>
                        <p onClick={this.menuHandler}><FontAwesomeIcon icon={faAngleLeft}/></p>
                        </li>
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link className="mainFont" to={item.link} onClick={this.menuHandler}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link className="active mainFont" to={submenu.link} onClick={this.menuHandler}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="navbtn" onClick={this.menuHandler}>
                    <Image src={mobileIcon2} alt={"sushi menu icon"} width="120%"/>
                </div>
            </>
        )
    }
}
