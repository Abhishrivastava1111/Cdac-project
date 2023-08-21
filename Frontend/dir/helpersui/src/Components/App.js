import Dashboard from "../DonateLink";
import Donar from "./Donar";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import RegistrationForm from "./Registration";
import { BrowserRouter } from "react-router-dom";

const App = ()=>{

    return <BrowserRouter>
    <Header/>
    <Dashboard/>
    <Donar/>
    <RegistrationForm/>
    <ToastContainer/>
   <Footer/>
    </BrowserRouter>
}
export default App;