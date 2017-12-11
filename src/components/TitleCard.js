 import React, { Component } from 'react';
 import { 
  Container,
  Title,
  SubTitle,
  Hero
} from 'reactbulma';

const TitleCard = () => (
 <Hero warning>
	<Hero.Body>
	    <Container>
	      <Title>
	        Reddit
	      </Title>
	      <SubTitle>
	        The front page of the internet!
	      </SubTitle>
	    </Container>
	  </Hero.Body>
    </Hero>
)

export default TitleCard;