import Dashboard from "../DonateLink";
import Donar from "./Donar";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import RegistrationForm from "./Registration";
import { BrowserRouter } from "react-router-dom";
import Landing from "./Landing";
import Viewcampaign from "./volunter/Viewcampaign";

const App = ()=>{

    return <BrowserRouter>
    
   <Landing/>
    </BrowserRouter>
}
export default App;