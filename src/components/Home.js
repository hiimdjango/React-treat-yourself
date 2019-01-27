import '../styles/home.css';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const items = [
  {
    src: 'images/bh5.jpg',
    altText: 'main-image',
    caption: 'First free canadian website for Medical Tourism.',
  },
  {
    src: 'images/bh4.jpg',
    altText: 'Treat Yourself',
    caption: ' First free canadian website for Medical Tourism',

  }

];

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="carousel"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img style={{maxWidth:'100%', maxHeight:'100%'}} src={item.src} alt={item.altText} />
          <CarouselCaption className="caption" captionText={item.caption}  />
        </CarouselItem>
      );
    });

    return (
      <div className="body">
        <Container fluid>
          <Row noGutters>
            <Col>
              <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            </Col>
          </Row>
          <Info />
          <Cards />
      </Container>
    </div>
    );
  }
}

class Info extends React.Component {
  render(){
    return(
      <div>
        <Row className="info">
          <Col>
            <h3 className="wwd">What we do ? </h3>
            <p className="after"></p>
            <p className="letterSpacing2">Incenderat autem audaces usque ad
               insaniam homines ad haec, quae nefariis Incenderat autem audaces usque ad</p>
            <h3 className="wwd" style={{marginTop:'10px'}}>How it works ? </h3>
            <p className="after"></p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="step-1">
              <h1 className="howItWorksSteps">Fill up a form</h1>
            </div>
          </Col>
          <Col>
            <div className ="step-2">
              <h1 className="howItWorksSteps">Choose your dates</h1>
            </div>
          </Col>
          <Col>
            <div className = "step-3">
              <h1 className="howItWorksSteps">Enjoy your holidays</h1>
            </div>
          </Col>
        </Row>
        <Row className="info">
          <Col>
            <button className="getStartedBtn btnHover" >Get Started!</button>
          </Col>
        </Row>
    </div>
    );
  }
}

class Cards extends React.Component {
  render(){
    return(
      <div>
        <Row className="cardsInfo">
          <Col>
            <Card className="letterSpacing2 ">
              <CardImg top width="100%" src="images/card1.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>Incredible experience</CardTitle>
                <CardSubtitle><i>Discover the world</i></CardSubtitle>
                <br/>
                <CardText>Take your health care to the next level and make it good memories you'll definetly remember for ever!..</CardText>
                <Button color="info">Read more</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="letterSpacing2 ">
              <CardImg top width="100%" src="images/card2.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>You're in safe hands</CardTitle>
                <CardSubtitle><i>Best local doctors</i></CardSubtitle>
                <br/>
                <CardText>Relationship with doctors must be based on trust and confidence, that's why we think it's important for..</CardText>
                <Button color="info">Read more</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
