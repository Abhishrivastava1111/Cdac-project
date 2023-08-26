    import React, { Component } from 'react';
    import {Link, Switch ,Route} from 'react-router-dom';
    import Header from './Header';
    import Footer from './Footer';
    import LoginForm from './LoginForm';
    import RegistrationForm from './Registration';
    import ProtectedRoute from './ProtectedRoute';
    import Viewcampaign from './volunter/Viewcampaign';
    import AddingHelpervolunter from './volunter/AddingHelperVolunter';
    import InputVerificationComponent from './OtoCheck';
    import Donarprofile from './Doner/Donarprofile';
    import CampaignSlider from './CampaignSlider';
    import ImageSlider from './LandingImgSlider';
    import StartCampaignForm from './StartCampaign';
// import './common.css'


    class Landing extends Component {
        render() { 
            return (<div>
                
                        <Header></Header>
                       
                   
                        <Switch>
                        <Route exact path="/ADLogin"
                        component={StartCampaignForm}/>
                        <Route exact path="/CampaignSlider"
                            component={CampaignSlider}/>
                        <Route exact path="/ImageSlider"
                            component={ImageSlider}/>
                        <Route exact path="/helper"
                             component={AddingHelpervolunter} />  
                        <Route exact path="/login" 
                            component={LoginForm}/>
                       
                        <ProtectedRoute exact path="/ViewCampaign"
                             component={Viewcampaign}/>
                        <Route exact path="/register" 
                            component={RegistrationForm}/>
                        <ProtectedRoute exact path ="/InputVerificationComponent"
                            component={InputVerificationComponent}/>
                        <ProtectedRoute exact path ="/Donarprofile"
                            component={Donarprofile}/>
                        </Switch>
                        
                        <hr></hr>
                        <Footer></Footer>

                    </div>);
        }
    }
    
    export default Landing;