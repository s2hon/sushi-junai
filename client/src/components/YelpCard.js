import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { 
    faStar
 } from "@fortawesome/free-solid-svg-icons";

const YelpCard = (props) => {
  const stars = props.stars;
  
  function numStars(stars) {
    for (let i=0; i<props.stars; i++){
      return <FontAwesomeIcon icon={faStar} />
    }
  }

  return (
    <div>
      <Card>
          <CardBody>
          <CardImg top width="100%" src={props.image} alt="Yelp reviewers" className="yelp-img" style={{border: 1, borderRadius:"50%", width: 100, padding: 5, float: "left" }}/>
          <CardTitle className="yelp-title" style ={{fontWeight: "bold"}}tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h3" className="mb-2 text-muted rating"> Rating: {numStars(stars)}</CardSubtitle>
          <CardText className="review-text" style={{fontSize:12}}><strong>"{props.text}"</strong></CardText>
          </CardBody>
      </Card>
    </div>
  );
};

export default YelpCard;