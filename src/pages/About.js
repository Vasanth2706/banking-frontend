import Base from "../components/Base";
import { CardText, CardTitle, CardImgOverlay, CardImg,Card,CardSubtitle,CardBody,CardGroup } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Stl from "./STL.PNG";
import { Container } from "reactstrap";

const About=()=>{
    return (
    

    <Base>
           <div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_780x440_mobile.jpeg"
      style={{
        height: 400
      }}
      width="100%"
    />
    <CardImgOverlay>
      {/* <CardTitle tag="h5">
        Bank
      </CardTitle> */}

      <CardText className="text-center">
        <div className="col-md-12">
            <h2 className="h2">Financial success at every service we offer.</h2>

        </div>
      </CardText>

      <CardText>
        {/* <small className="text-muted">
          Last updated 3 mins ago

          
        </small> */}
      </CardText>
    </CardImgOverlay>
  </Card>
</div>


<Container style={{
    paddingTop:20
}}>

<CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={Stl}
      top
      width="100%"
    />
   
     
  </Card>
  

 
  <Card>
    
    <CardBody className="text-center">
      <CardTitle tag="h1" style={{
        paddingTop:20
        
        
      }}>
       <strong>About Us</strong>
       
      </CardTitle>
    

      {/* <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle> */}

<Container style={{
    paddingTop:10
}}>
      <CardText>
        
       <div>
        <strong>
                <h3>Our Corporate Office!</h3>
       </strong>
        
       </div>

       <Container style={{
        paddingTop:40
       }}>
       <h5>No:5,Vivekananda Street,Dubai Main Road,Dubai</h5>
       </Container>

       
      
      </CardText>
</Container>

      {/* <Button>
        Button
      </Button> */}
    </CardBody>
  </Card>
</CardGroup>


</Container>

    </Base>

    
    )   
        
};

export default About;