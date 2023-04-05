import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Base from "./components/Base";
import About from './pages/About';
import ContactUs from "./pages/ContactUs";
import SignUpForm from "./pages/SignUpForm";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import ThirdParty from "./pages/ThirdParty";
import Transactions from "./pages/Transactions";
import TransferMoney from "./pages/TransferMoney";
function App() {
  function getUser(){
    let token=JSON.parse(localStorage.getItem("User"));
    if(localStorage.getItem("User")!=null){
      fetch('http://localhost:8093/login/validate',{
        method:"GET",
        headers: {'Content-Type': 'application/json',
      'Authorization':"Bearer "+token.token},
    }).then((res)=>{
      if(res){
        // history('/dashboard')
      }
    })
    }
  }
getUser()
return (
  <div>
    <Router>
    <div className="container">
      <Routes>
        <Route exact path="/" element = {<Home/>}></Route>
        <Route path="/signup" element = {<SignUpForm/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/dashboard" element = {<DashBoard/>}></Route>
        <Route path="/thiryparty" element = {<ThirdParty/>}></Route>
        <Route path="/transactions" element = {<Transactions/>}></Route>
        <Route path="/fundtrasfer" element = {<TransferMoney/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/contactus" element = {<ContactUs/>}></Route>

      </Routes>
    </div>

    </Router>
  </div>
);
  // return (
  //   <div className="App">
  //     <BrowserRouter>
  //       {/* <ToastContainer position="bottom-center" /> */}
         
  //       <Routes>
          
  //         <Route path="/" exact element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/contactus" element={<ContactUs />} />
  //         <Route path="/login" element={<Login/>}/>
  //         <Route path="/signup" element={<SignUpForm/>}></Route>
  //         {/* <Route path="/login" element={<Login />} />
  //         <Route path="/signup" element={<Signup />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/contactus" element={<ContactUs />} />

  //         <Route path="/client" element={<Privateroute />}>
  //           <Route path="dashboard" element={<Clientdashboard />} />

  //           <Route path="accountdetails" element={<AccountDetails />} />
  //           <Route path="transactions" element={<AccountTransactions />} />
  //           <Route
  //             path="transactionshistory"
  //             element={<AccountTransactionHistory />}
  //           />

  //           <Route path="fundtransferbtw2" element={<FundTransferbtw2 />} />
  //           <Route path="fundtransferbtw3" element={<FundTransferbtw3 />} />

  //           <Route path="profileinfo" element={<ProfileInfo />} />
  //         </Route> */}
  //       </Routes>
  //     </BrowserRouter>

  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header> */}
  //   </div>
  // );
}

export default App;
