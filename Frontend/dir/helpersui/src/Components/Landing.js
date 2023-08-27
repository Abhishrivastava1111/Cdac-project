import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useLocation } from 'react-router-dom';
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
import UpiAppsPage from './Payment';
import temp from './temp';
import ContactUs from './About';
import Donate from './Donate';


const Landing = () => {
  const [login, setLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Update login state based on the current path
    if (location.pathname === '/StartCampaign') {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [location.pathname]);

  const routes = {
    key1: <Header></Header>,
    key2: <Footer></Footer>
  };

  return (
    <div>
      {login ? null : routes.key1}
       
      <Switch>
        <Route exact path="/" component={temp}/>
        <ProtectedRoute exact path="/donate" component={Donate}/>
        <Route exact path="/ContactUs" component={ContactUs}/>
        <Route exact path="/startcampaign" component={StartCampaignForm} />
        <Route exact path="/CampaignSlider" component={CampaignSlider} />
        <Route exact path="/ImageSlider" component={ImageSlider} />
        <ProtectedRoute exact path="/helper" component={AddingHelpervolunter} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/UpiAppsPage"component={UpiAppsPage}/>
        <ProtectedRoute exact path="/ViewCampaign" component={Viewcampaign} />
        <Route exact path="/register" component={RegistrationForm} />
        <ProtectedRoute exact path="/InputVerificationComponent" component={InputVerificationComponent} />
        <ProtectedRoute exact path="/Donarprofile" component={Donarprofile} />
      </Switch>

      {login ? null : routes.key2}
      <hr />
    </div>
  );
}

export default Landing;
