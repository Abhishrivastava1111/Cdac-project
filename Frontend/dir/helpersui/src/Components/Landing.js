    import React, { Component } from 'react';
    import {Link, Switch ,Route} from 'react-router-dom';
    import Header from './Header';
    import Footer from './Footer';
    import LoginForm from './LoginForm';
import RegistrationForm from './Registration';
import ProtectedRoute from './ProtectedRoute';
import Viewcampaign from './volunter/Viewcampaign';
    // import './common.css'


    class Landing extends Component {
        render() { 
            return (<div>
                
                        <Header></Header>
                        
                        <Switch>
                            
                        <Route exact path="/login" 
                                component={LoginForm}/>
                       <ProtectedRoute exact path="/ViewCampaign"
                        component={Viewcampaign}/>
                                    <ProtectedRoute exact path="/register" 
                            component={RegistrationForm}/>
                        </Switch>
                        
                        <hr></hr>
                        <Footer></Footer>

                    </div>);
        }
    }
    
    export default Landing;