import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const YelpCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Yelp reviewers" />
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.stars}</CardSubtitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default YelpCard;