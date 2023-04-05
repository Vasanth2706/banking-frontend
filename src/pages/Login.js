import React, { useState } from "react";
import "../components/styles.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BankAppBar from "../components/BankAppBar";
import SignUpForm from "./SignUpForm";
function Login() {
  const history = useNavigate();
  const [customerID, setCustomerId] = useState("");
  const [password, setPassword] = useState("");

  function logInUser() {
    const user = { customerID, password };
    fetch("http://localhost:8093/login/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      res.json().then((reslt) => {
        localStorage.setItem(
          "User",
          JSON.stringify({
            login: true,
            token: reslt.token,
            customerID: customerID,
          })
        );
        history("/dashboard");
      });
    });
  }

//   const renderErrorMessage = (name) =>
//     name === errorMessage.name && (
//       <div className="error">{errorMessage.message}</div>
//     );

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <BankAppBar/>
      <br/><br/>
      <Container>
        <Row>
          <Col sm={{ size: 8, offset: 5 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
            <Card>
              <CardHeader className="Blueback">
                <h2>Login to Account</h2>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="customerId">Customer ID</Label>
                    <Input type="number" name="customerId" id="customerId" placeholder="Enter customer id" required onChange={(event) => setCustomerId(event.target.value)} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Enter password" required onChange={(event) => setPassword(event.target.value)} />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="rememberMe" id="rememberMe" />
                      Remember me
                    </Label>
                  </FormGroup>
                  <Button color="primary" block onClick={logInUser}>Login In</Button>
                </Form>
                <FormText>
                  Do you have an account? <Link to="/signup">Register</Link>
                </FormText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
      
  );
}

export default Login;
