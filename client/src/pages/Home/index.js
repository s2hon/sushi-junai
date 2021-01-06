import React from "react";
import Card from "../../components/Card/index";
import { Row, Col } from "reactstrap";
import data from "../../db/store.json";
// import { useStoreContext } from '../../utils/GlobalStore';
import './style.css';
import Counter from "../../components/Counter";
import Yelp from "../../components/Yelp";
import photos from "../../db/photos.json"
import Gallery from "react-photo-gallery";
import Feedback from "../../components/Feedback";

function Home(props) {
    // const [state] = useStoreContext();

    return (
        <React.Fragment>
            <Counter/>
            <div className="menu-container container">
                <Row className="justify-content-center">
                    {
                        data.map((data, idx) => {
                            return (
                                <Card key={idx} location={data.location} phonehref={data.phonehref} phone = {data.phone} address={data.address}
                                    mon={data.mon} tue={data.tue} wed={data.tue} thu={data.thu} fri={data.fri} sat={data.sat} sun={data.sun} href={data.maps}>
                                </Card>
                            )
                        })
                    }
                </Row>
                <Row className="justify-content-center">
                    <Col sm="12" md={{size:8, offset:2}} lg={{size:8, offset: 0}}>
                    <Gallery photos={photos}/>
                    </Col>
                        
                </Row>
                <Row>
                    <Yelp/>
                </Row>
                <Feedback />
            </div>
    </React.Fragment>);
}

export default Home;