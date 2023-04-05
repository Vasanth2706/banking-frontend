import React,{useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import DashBoardNav from '../components/DashBoardNav';
//import DashBoardNav from './DashBoardNav';
import CustomerCard from '../components/CustomerCard';

function DashBoard() {
    const [customerData, setCustomerData] = useState([])
    const [isloaded, setisloaded] = useState(false)

    function getCustomers(){
        if(localStorage.getItem("User")!=null&&!isloaded){
            const user= JSON.parse(localStorage.getItem("User"));
            fetch('http://localhost:8091/accounts/customer/'+user.customerID,{
                method:"GET",
                headers: {'Content-Type': 'application/json',
                'Authorization':"Bearer "+user.token},
            }).then((res)=>{
                res.json().then(reslt=>{
                    const data=[];
                    const custtemp={
                        title:"Customer Details",
                        labels:[
                            {
                                lable:"Customer ID",
                                value:reslt.customerId
                            },
                            {
                                lable:"First Name",
                                value:reslt.firstName
                            },
                            {
                                lable:"Last Name",
                                value:reslt.lastName
                            },
                            
                            {
                                lable:"Email",
                                value:reslt.email
                            },
                            
                        ]
                    };
                    const accounttemp={
                        title:"Account Details",
                        labels:[
                            {
                                lable:"Account Number",
                                value:reslt.accountId
                            },
                            {
                                lable:"IFSC Code",
                                value:reslt.ifscCode
                            },
                            {
                                lable:"Account Type",
                                value:reslt.type
                            },
                            {
                                lable:"Total Amount",
                                value:reslt.amount
                            }
                        ]
                    }
                    data.push(custtemp);
                    data.push(accounttemp);
                    setCustomerData(data);
                    setisloaded(true)
                }) 
            })
        }
    }
    getCustomers()
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
    <DashBoardNav />
    <Container style={{ marginLeft: '0.5px', marginTop: '30px' }}>
      <Row className="justify-content-center align-items-center">
        {customerData.map((item, i) => (
          <Col xs="auto" key={i}>
            <CustomerCard title={item.title} labels={item.labels} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  )
}

export default DashBoard