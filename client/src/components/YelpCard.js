import React from 'react';
import {
  Card,  CardText, CardBody,
  CardSubtitle
} from 'reactstrap';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { 
    faStar
} from "@fortawesome/free-solid-svg-icons";

const YelpCard = (props) => {
  const stars = props.stars;
  
  function numStars(stars) {
    if (stars===1) {
      return <FontAwesomeIcon icon={faStar} />
    } else if (stars===2) {
      return <><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></>
    } else if (stars===3) {
      return <><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></>
    } else if (stars===4) {
      return <><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></>
    } else {
      return <><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></>
    }
    
  }

  return (
    <div>
      <Card className="review-card menu-card">
          <CardBody className="center">
          {/* <CardImg top width="100%" src={props.image} alt="Yelp reviewers" className="yelp-img" style={{border: 1, borderRadius:"50%", width: 100, padding: 5, float: "left" }}/> */}
          
          <CardSubtitle tag="h3" className="mb-2 stars rating"> {numStars(stars)}</CardSubtitle>
          <CardText className="review-text mainFont">"{props.text}"</CardText>
          <CardText className="yelp-title mainFont" style ={{fontWeight: "bold"}}tag="h5">{props.name}</CardText>
          </CardBody>
      </Card>
    </div>
  );
};

export default YelpCard;