import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import RegistrationForm from "./Registration";
import { BrowserRouter } from "react-router-dom";

import Landing from "./Landing";
import UpiAppsPage from "./Payment";

import AddingHelpervolunter from "./volunter/AddingHelperVolunter";
import Donarprofile from "./Doner/Donarprofile";
import Dashboard from "./Doner/Dashboard";
import Dashboard1 from "./Doner/Dash";
import LoginForm from "./LoginForm";
import Header from "./Header";
import Footer from "./Footer";
import { AuthProvider } from "./Auth";


const App = ()=>{

    return(<AuthProvider> <BrowserRouter>
   
   <ToastContainer/>
   {/* <Dashboard/> */}
    <UpiAppsPage/>

   <Landing/>
   
    </BrowserRouter>
    </AuthProvider>)
}
export default App;