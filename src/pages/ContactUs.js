import React from "react";
import Base from "../components/Base";
import { CardText, CardTitle, CardImgOverlay, CardImg,Card,CardSubtitle,CardBody,CardGroup } from "reactstrap";

function ContactUs() {
  return (
    <div>
      <Base />
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_780x440_mobile.jpeg"
          style={{
            height: 500,
            backgroundRepeat: "repeat-x"
          }}
          width="100%"
        />
        
          {/* <CardTitle tag="h5">
        Bank
      </CardTitle> */}


                 
      </Card>
          <CardText className="text-center">
            <div className="col-md-12">
              <h2 className="h2">
                Contact us: 908645367865
              </h2>
            </div>
          </CardText>
    </div>
  );
}

export default ContactUs;
