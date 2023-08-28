import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter } from "react-router-dom";

import Landing from "./Landing";

import { AuthProvider } from "./Auth";
import AddingHelpervolunter from "./volunter/AddingHelperVolunter";



const App = ()=>{
    

    return(<AuthProvider> <BrowserRouter>
   <ToastContainer/>
  
        <Landing/>
    </BrowserRouter>
    </AuthProvider>)
}
export default App;