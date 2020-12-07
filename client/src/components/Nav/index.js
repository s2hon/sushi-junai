import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';
import Image from "./../Image";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import menus from "../../db/nav.json";


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
                                                        <li key={submenu.id}><Link className="active" className="mainFont" to={submenu.link} onClick={this.menuHandler}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                        <li key="8">
                            <p onClick={this.setIsOpen(8)}>
                            Reservations <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </p>
                            <Collapse isOpen={8 === isOpen}>
                                <Card>
                                    <CardBody>
                                        <ul>
                                            <li>
                                                <a target={"_blank"} rel="noreferrer" href="https://www.yelp.com/biz/sushi-junai-austin">Sushi Junai 1</a>
                                            </li>
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </li>
                        <li key="9">
                            <p onClick={this.setIsOpen(9)}>
                            Online Order <i className="fa fa-angle-right" aria-hidden="true"></i>
                            </p>
                            <Collapse isOpen={9 === isOpen}>
                                <Card>
                                    <CardBody>
                                        <ul>
                                            <li>
                                                <a target={"_blank"} rel="noreferrer" href="https://www.yelp.com/biz/sushi-junai-austin">Sushi Junai 1</a>
                                            </li>
                                            <li>
                                                <a target={"_blank"} rel="noreferrer" href="https://www.yelp.com/biz/sushi-junai-2-austin">Sushi Junai 2</a>
                                            </li>
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </li>
                    </ul>

                </div>

                <div className="navbtn" onClick={this.menuHandler}>
                    <Image src={"../assets/sushi-icon.png"} alt={"sushi menu icon"} width="75%"/>
                </div>
            </>
        )
    }
}
