import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/index";
import Container from "../../components/Container";
import {Col} from "reactstrap";
import Button from "../../components/Button";
import data from "../../db/store.json";
import { useStoreContext } from '../../utils/GlobalStore';
import HomeCarousel from "../../components/HomeCarousel";
import './style.css'

function Home(props) {
    const [state] = useStoreContext();

    return (
    <React.Fragment>
            <div className="container" style={{display:"flex", justifyContent:"space-evenly", flexDirection:"column", marginTop:150}}>
                <div className="row" style={{height:100, display:"flex", justifyContent:"space-evenly", }}>
                    {
                        data.map((data, idx) => {
                            return (
                    
                                    <Card key={idx} location={data.location} phone={data.phone} address={data.address}
                                    mon={data.mon} tue={data.tue} wed={data.tue} thu={data.thu} fri={data.fri} sat={data.sat} sun={data.sun}>
                                    </Card>
                            
                            )
                        })
                    }
                </div>
                <div className="row">
                    <Col sm="12" md={{ size: 6, offset: 3 }} lg={{size: 6, offset: 3}}>
                    <HomeCarousel />
                    </Col>
                </div>
                <div className="row" style={{display:"flex", justifyContent:"space-evenly", flexDirection:"row"}}>
                    <a href={"https://www.yelp.com/biz/sushi-junai-austin"}>
                        <Button type={"button"} btn={"btn btn1"}>Reservations</Button>
                    </a>
                    <Link to={!state.userLoggedIn ? "/login": "/choice"}>
                        <Button type={"button"} btn={"btn btn1"}>Dine In</Button>
                    </Link>    
                    <a href={"https://www.yelp.com/order/v2/cart/954de1b27f3ee7705f2ca2d2c8336670"}>
                            <Button type={"button"} btn={"btn btn1"}>Carry Out</Button>
                            </a>
                </div>
            </div>
    </React.Fragment>);
}

export default Home;