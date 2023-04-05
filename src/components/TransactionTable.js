import React ,{useState,useStyles}from 'react';
import './ThirdPartyTable.css';
import { Row,Col,Table,Container } from 'reactstrap';

function createData(transactionId, receiveAccountId, receiveIfsc, receiveType, amount,timeStamp) {
    return { transactionId, receiveAccountId, receiveIfsc, receiveType, amount,timeStamp };
  }
  
  const rows = [];
function TransactionTable() {
    const classes = useStyles();
  const [isloaded, setisloaded] = useState(false)
  const [rows, setrows] = useState([])
  function getCustomers(){
    if(localStorage.getItem("User")!=null&&!isloaded){
        const user= JSON.parse(localStorage.getItem("User"));
        fetch('http://localhost:8092/transactions/customer/'+user.customerID,{
            method:"GET",
            headers: {'Content-Type': 'application/json',
            'Authorization':"Bearer "+user.token},
        }).then((res)=>{
            res.json().then(reslt=>{
                reslt.map((item,i)=>{
                    rows.push(createData(item.transactionId, item.receiveAccountId, item.receiveIfsc, item.receiveType, item.amount,item.timeStamp))
                });
                setisloaded(true)
            }) 
        })
    }
}
  getCustomers()
    
  return (
    <div style={{margin:"20px"}}>
    <Container>
      <Row>
        <Col>
          <Table bordered className='table'>
            <thead>
              <tr>
                <th>Beneficiary Id</th>
                <th>Beneficiary Name</th>
                <th>Beneficiary AccountId</th>
                <th>Beneficiary IFSC</th>
                <th>Beneficiary Type</th>
                <th>Time Stamp</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.transactionId}>
                  <td>{row.bnfId}</td>
                  <td>{row.bnfName}</td>
                  <td>{row.bnfAccount}</td>
                  <td>{row.bnfIfscCode}</td>
                  <td>{row.accountType}</td>
                  <td>{row.modified}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default TransactionTable