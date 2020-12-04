import React, { useState } from 'react';
import Button from "../components/Button";
import { Link } from "react-router-dom";
import moment from 'moment';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: "./assets/008-fish.png",
    altText: "picture of sushi",
    rule: "Rule 1",
    caption: "Absolutely NO SHARING between All you can eat and A LA CARTE customers"
  },
  {
    src: "./assets/015-pan.png",
    altText: "picture of sushi",
    rule: "Rule 2",
    caption: "If ALL items ordered are not completely consumed, you may be charged A LA CARTE pricing"
  },
  {
    src: "./assets/019-salmon.png",
    altText: "picture of sushi",
    rule: "Rule 3",
    caption: "Items marked with red text can only be ordered once"
  },
  {
    src: "./assets/030-tuna.png",
    altText: "picture of sushi",
    rule: "Rule 4",
    caption: "Ordering time is limited to 2 Hours"
  }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.rule}>
    </CarouselCaption>   
    
      </CarouselItem>
    );
  });
function setTimer(e) {
    localStorage.setItem("timer", 7199);
    localStorage.setItem("date", moment().format('MMMM Do YYYY'));
}

  return (<>
  <h1>Please Read ALL rules before agreeing, or click "Al a Carte" to order individual sushi</h1>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}  />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <Link to={"/alacarte"}>
      <Button type={"button"} btn={"btn btn-dark"}>Al A Carte</Button>
    </Link>
    <Link to={"/ayce"}>
      <Button type={"button"} btn={"btn btn-dark"} function ={setTimer}>I agree</Button>
    </Link>
  </>
  );
}

export default Slider;