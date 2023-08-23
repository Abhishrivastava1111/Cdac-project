
import { Route } from "react-router-dom/cjs/react-router-dom";
import LoginForm from "./LoginForm";
function ProtectedRoute(props)
{
    var isUserLoggedIn = 
   JSON.parse(window.sessionStorage.getItem("credential"))
   
 
    if(isUserLoggedIn != null )
    
    {
        console.log(isUserLoggedIn.email)
        return <Route exact path={props.path} 
        component={props.component}/>;
       
    }
    else
    {
        return <LoginForm></LoginForm>
    }
}

export default ProtectedRoute