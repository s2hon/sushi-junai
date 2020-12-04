import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';
import Image from "./../Image";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
            <div>
                <div className={`sidebar ${isMenuShow ? 'show' : ''}`}>
                    <ul className="navlist">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link to={item.link} onClick={this.menuHandler}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link className="active" to={submenu.link} onClick={this.menuHandler}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}

                        <li>
                            <a target={"_blank"} rel="noreferrer" href="https://www.yelp.com/biz/sushi-junai-2-austin">Reservations</a>
                        </li>
                        <li>
                            <a target={"_blank"} rel="noreferrer" href="https://www.yelp.com/biz/sushi-junai-2-austin">Order Online</a>
                        </li>
                    </ul>

                </div>

                <div className="navbtn" onClick={this.menuHandler}>
                    <Image src={"../assets/sushi.png"} alt={"kawaii-sake"} width="100%"/>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        )
    }
}
