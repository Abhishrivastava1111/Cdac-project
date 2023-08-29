import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import RegistrationForm from './Registration';
import ProtectedRoute from './ProtectedRoute';
import Viewcampaign from './volunter/Viewcampaign';
import AddingHelpervolunter from './volunter/AddingHelperVolunter';
import OTPVerificationComponent from './OtoCheck';
import Donarprofile from './Doner/Donarprofile';
import CampaignSlider from './CampaignSlider';
import ImageSlider from './LandingImgSlider';
import StartCampaignForm from './StartCampaign';
import UpiAppsPage from './Payment';
import temp from './temp';
import ContactUs from './About';
import Donate from './Donate';
import SuccessStory from './SuccessStories';
import VolunteerList from './Worker/volunteerList';
import Layout from './Worker/Layout';
import CampaignTable from './Worker/CampaignTable';
import EditVolunteer from './Worker/EditVolunteer';
import DonarLayout from './Doner/DonarLayout';
import AddingHelpervolunterSplo from './volunter/AddHelper';



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
        <Route exact path="/SuccessStory" component={SuccessStory}/>
        <ProtectedRoute exact path="/donate" component={Donate}/>

        <ProtectedRoute exact path="/DonarLayout" component={DonarLayout}/>
        <Route exact path="/ContactUs" component={ContactUs}/>
        <Route exact path="/startcampaign" component={StartCampaignForm} />
        <Route exact path="/CampaignSlider" component={CampaignSlider} />
        <Route exact path="/ImageSlider" component={ImageSlider} />
        <ProtectedRoute exact path="/AddingHelpervolunter" component={AddingHelpervolunter} />
        <Route exact path="/AddingHelpervolunterSplo" component={AddingHelpervolunterSplo} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/UpiAppsPage"component={UpiAppsPage}/>
        <ProtectedRoute exact path="/ViewCampaign" component={Viewcampaign} />
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/OTPVerificationComponent" component={OTPVerificationComponent} />
        <ProtectedRoute exact path="/VolunteerList" component={VolunteerList}/>
        <ProtectedRoute exact path="/EditVolunteer" component={EditVolunteer}/>
        <ProtectedRoute exact path="/Layout" component={Layout}/>
        <Route exact path="/Donarprofile" component={Donarprofile} />
        <ProtectedRoute exact path="/CampaignTable" component={CampaignTable}/>
      </Switch>

      {login ? null : routes.key2}
      <hr />
    </div>
  );
}

export default Landing;
