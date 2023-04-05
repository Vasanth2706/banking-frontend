import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
} from "reactstrap";

function AddThirdParty() {
  const history = useNavigate();
  const [bnfAccount, setBnfAccount] = useState("");
  const [bnfName, setBnfName] = useState("");
  const [bnfIfscCode, setBnfIfscCode] = useState("");
  const [accountType, setAccountType] = useState("");

  function createUser() {
    if (localStorage.getItem("User") != null) {
      const userdata = JSON.parse(localStorage.getItem("User"));
      const customerId = userdata.customerID;
      const user = {
        customerId,
        bnfAccount,
        bnfName,
        bnfIfscCode,
        accountType,
      };
      fetch("http://localhost:8091/accounts/thirdparty/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then((res) => {
        setBnfAccount("");
        setBnfIfscCode("");
        setBnfName("");
        setAccountType("");
      });
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardHeader className="bg-light">
                <h2 className="text-center">Add Beneficiary Account</h2>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="account-id">Account ID</Label>
                    <Input
                      type="number"
                      id="account-id"
                      placeholder="Enter account id"
                      value={bnfAccount}
                      onChange={(event) => setBnfAccount(event.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="ifsc-code">IFSC Code</Label>
                    <Input
                      type="text"
                      id="ifsc-code"
                      placeholder="Enter ifsc"
                      value={bnfIfscCode}
                      onChange={(event) => setBnfIfscCode(event.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="beneficiary-name">Beneficiary Name</Label>
                    <Input
                      type="text"
                      id="beneficiary-name"
                      placeholder="Enter name"
                      value={bnfName}
                      onChange={(event) => setBnfName(event.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="account-type">Account Type</Label>
                    <Input
                      type="select"
                      id="account-type"
                      value={accountType}
                      onChange={(event) => setAccountType(event.target.value)}
                      required
                    >
                      <option value="">Account Type</option>
                      <option value="Current">Current</option>
                      <option value="Saving">Saving</option>
                    </Input>
                  </FormGroup>
                  <Button
                    type="submit"
                    color="primary"
                    block
                    onClick={createUser}
                  >
                    Add Account
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddThirdParty;
