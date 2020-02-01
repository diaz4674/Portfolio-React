import React, { useState } from "react";
import me from "../images/me.jfif";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const CarouselImage = {
  display: "flex",
  justifyContent: "center"
};
function Portrait() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Container>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        className={CarouselImage}
      >
        <Carousel.Item>
          <img className={CarouselImage} src={me} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={CarouselImage} src={me} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className={CarouselImage} src={me} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;
`;

export default Portrait;
