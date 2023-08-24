import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import RegistrationForm from "./Registration";
import { BrowserRouter } from "react-router-dom";

import Landing from "./Landing";

import AddingHelpervolunter from "./volunter/AddingHelperVolunter";
import Donarprofile from "./Doner/Donarprofile";

const App = ()=>{

    return <BrowserRouter>
   
   <ToastContainer/>
   <Donarprofile/>
   <Landing/>
    </BrowserRouter>
}
export default App;