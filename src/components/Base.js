import Home from "../pages/Home";
import Example from "./Example";
import NavBar from "./NavBar";
//import CustomNavbar from "./Example";

const Base=({title="Welcome to our website",children})=>{

    return (
            <div className="container-fluid p-0 m-0">
                
                {/* <Example/> */}
                <NavBar/>
                

                { children }

                
            </div>
    )
}

export default Base;