import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
} from "reactstrap";
import BankAppBar from "../components/BankAppBar";

function SignUpForm() {
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ifscCode, setIfsc] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = React.useState("");

  const saveCustomer = (e) => {
    e.preventDefault();
    const customer = {
      type,
      ifscCode,
      firstName,
      lastName,
      email,
      password,
      amount,
    };
    fetch("http://localhost:8093/login/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    }).then((res) => {
      res.json().then((reslt) => {
        localStorage.setItem(
          "User",
          JSON.stringify({
            login: true,
            token: reslt.token,
          })
        );
        history("/login");
      });
    });
  };
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <BankAppBar />
      <Container>
        <Row>
          <Col xs="12" sm="8" md="6" lg="4" xl="4" className="mx-auto">
            <div className="text-center">
              {/* <img
                className="mb-4"
                src="/images/logo.png"
                alt="logo"
                width="72"
                height="72"
              /> */}
              <h1 className="h3 mb-3 font-weight-normal">
                Welcome to STL Bank
              </h1>
            </div>
            <Form>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter First Name"
                  required
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  required
                  onChange={(event) => setLastName(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your mail id"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="accountType">Account Type</Label>
                <Input
                  type="select"
                  name="accountType"
                  id="accountType"
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                >
                  <option value="">Account Type</option>
                  <option value="Current">Current</option>
                  <option value="Saving">Saving</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="ifscCode">IFSC Code</Label>
                <Input
                  type="text"
                  name="ifscCode"
                  id="ifscCode"
                  placeholder="Enter ifsc"
                  required
                  onChange={(event) => setIfsc(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount">Amount</Label>
                <Input
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="Enter amount"
                  required
                  onChange={(event) => setAmount(event.target.value)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> Remember me
                </Label>
              </FormGroup>
              <Button color="primary" block onClick={saveCustomer}>
                Register Now
              </Button>
              <p className="text-center my-3">
                {" "}
                Already Registered? <Link to="/login">Login</Link>{" "}
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUpForm;
