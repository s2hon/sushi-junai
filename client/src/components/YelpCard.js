import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const YelpCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Yelp reviewers" className="yelp-img"/>
        <CardBody>
          <CardTitle className="yelp-title" style ={{fontWeight: "bold"}}tag="h1">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted rating"> Rating{props.stars} Stars</CardSubtitle>
          <CardText className="review-text">"{props.text}"</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default YelpCard;