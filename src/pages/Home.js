import React from "react";
import {FaMoneyCheck} from "react-icons/fa";
import NavBar from "../components/NavBar";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  NavItem,
  Button
} from "reactstrap";
import MyCard from "../components/MyCard";
import './Home.css';

function Home() {
  var items = [
    {
      title: "#1 Choice for your banking needs",
      description:
        "Our Card is the best option if you are looking for high-quality and reliable banking services. We provide reliable services for you",
      image: "/assets/card1.png",
    },
    {
      title: "The Britest bank card in your wallet",
      description:
        "Our Card is the best option if you are looking for high-quality and reliable banking services. We provide reliable services for you",
      image: "/assets/card2.png",
    },
    {
      title: "#1 Choice for your banking needs",
      description:
        "Our Card is the best option if you are looking for high-quality and reliable banking services. We provide reliable services for you",
      image: "/assets/card3.png",
    },
    {
      title: "The Britest bank card in your wallet",
      description:
        "Our Card is the best option if you are looking for high-quality and reliable banking services. We provide reliable services for you",
      image: "/assets/card4.png",
    },
  ];

  var aboutItems = [
    {
      title: "32167",
      subtitle1: "More Than",
      subtitle2: "Issued cards",
      icon: <FaMoneyCheck/>,
      desc: "If you are looking for high-quality and reliable banking services. Our Bank card is the best option.",
    },
    {
      title: "25%",
      subtitle1: "Upto",
      subtitle2: "Cashback",
      // icon: <MoneyIcon/>,
      desc: "If you are looking for high-quality and reliable banking services. Our Bank card is the best option.",
    },
    {
      title: "40%",
      subtitle1: "Upto",
      subtitle2: "Fixed Deposit",
      //icon: <AutoGraphIcon/>,
      desc: "If you are looking for high-quality and reliable banking services. Our Bank card is the best option.",
    },
  ];
  return (
    <div>
      <NavBar />
      <Container fluid style={{ backgroundColor: "#f5f5f5" }}>
        <div style={{ position: "relative", height: "750px" }}>
          <div
            style={{
              width: "100%",
              height: "510px",
              backgroundColor: "#614da7",
              paddingBottom: "40px",
            }}
          >
            <Carousel>
              {items.map((item, i) => (
                <CarouselItem key={i}>
                  <NavItem item={item} />
                </CarouselItem>
              ))}
            </Carousel>
            <Row
              className="justify-content-center"
              style={{ marginLeft: "0.5px", marginTop: "30px" }}
            >
              {aboutItems.map((item, i) => (
                <Col xs={4} key={i}>
                  <MyCard
                    title={item.title}
                    subtitle1={item.subtitle1}
                    subtitle2={item.subtitle2}
                    desc={item.desc}
                    Icon={item.icon}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
      <Container style={{ marginLeft: "5px", marginTop: "30px" }}>
        <Row className="justify-content-center align-items-center">
          <Col xs="7">
            <p className="text1">
              Our bank founded in 2017 to introduce the new level of financial
              services. We are still dedicated to the success of our clients
            </p>
            <p className="text2">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
              amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet.
              Lorem ipsum init dolor sit, amet elit. Dolor ipsum non velit,
              culpa! Vivamus a et ut justo, init in dolor et.
            </p>
            <Button className="button">Learn More</Button>
          </Col>
          <Col xs="5">
            <img
              src="/assets/about.jpg"
              alt="img"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
