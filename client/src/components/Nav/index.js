import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';
import Image from "./../Image";
const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 7,
                title: 'Login',
                link: '/login'
            },
            {
                id: 8,
                title: 'Signup',
                link: '/signup'
            },
            {
                id:9,
                title: 'Logout',
                link: '/logout'
            },
        ]
    },
{
    id: 2,
        title: 'A La Carte',
        link: '/alacarte',
},
{
    id: 3,
        title: 'All You Can Eat',
        link: '/rules',
},
{
    id: 4,
        title: 'Lunch Special',
        link: '/lunch',
},
{
    id: 5,
        title: 'Order Summary',
        link: '/ordersummary',
},
{
    id: 6,
        title: 'Favorite',
        link: '/favorite',

}
]


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
                            <a href="https://www.yelp.com/biz/sushi-junai-2-austin">Reservations</a>
                        </li>
                        <li>
                            <a href="https://www.yelp.com/order/v2/cart/954de1b27f3ee7705f2ca2d2c8336670">Order Online</a>
                        </li>

                        
                    </ul>

                </div>

                <div className="navbtn" onClick={this.menuHandler}><Image src={"../assets/sushi.png"} alt={"kawaii-sake"} width="100%"/></div>
            </div>
        )
    }
}
