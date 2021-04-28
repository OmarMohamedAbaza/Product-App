// import './Home.css';
// import AliceCarousel from 'react-alice-carousel';

import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   id:'1',
   image: ('caro1.jpg'), 
   caption:"Shopping is Lifestyle",
   description:"You will find What fits you here"
  },
  {
    id:'2',
    image:('caro2.jpg'), 
    caption:"Stay tuned to our offers",
    description:"You will find What fits you here"
   },
   {
    id:'3',
    image:('caro4.jpg'), 
    caption:"Check the best products section",
    description:"You will find What fits you here"
   },
   {
    id:'4',
    image:('caro3.jpg'), 
    caption:"Follow us",
    description:"You will find What fits you here"
   } 
]

const Home = ()=> {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="py-3" activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item key={slide.id}>        
        <img
          className="imgCaro img-fluid d-block w-100"
          src={slide.image}
          alt="slider pic"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
        



/* <div className="home">
    <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src="carosel1.jpg" className="sliderimg" alt="carosel 1" />
        <img src="carosel2.jpg" className="sliderimg" alt="carosel 2" />
        <img src="carosel3.jpg" className="sliderimg" alt="carosel 3" />
        <img src="carosel4.jpg" className="sliderimg" alt="carosel 4" />
    </AliceCarousel>
</div> */

/* <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="logo512.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="logo512.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="logo512.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */
    );
}

export default Home;