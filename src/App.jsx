import { useState, useEffect } from "react";
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import { Navigation } from "./components/navigation";
import {Aqicards} from "./components/aqicards";
import { Header } from "./components/header";
import { Aqihistory } from "./components/aqihistory";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import {Aqi} from "./components/aqi"
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import "./W3.css";
import { IndividualParameter } from "./components/IndividualParameter";
import { Userprofile } from "./components/Userprofile";
import 'animate.css'
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications, Store } from 'react-notifications-component'
import {Login} from "./admin/Login";
import { Dashboard } from "./admin/Dashboard";
import { SensorData } from "./admin/SensorData";
import { ManageNotifications } from "./admin/ManageNotifications";
import { ManageSuggestions } from "./admin/ManageSuggestions";
import { ViewAqi } from "./admin/ViewAqi";
import {AqiHistory} from './admin/AqiHistory'
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  
  return (
    <div> 
      <Router>
   
      {/* <Navigation />
         <ReactNotifications />
      <Header data={landingPageData.Header} />
      <Aqi data={landingPageData.Aqi}/>
      <Aqihistory data={landingPageData.Aqihistory} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Aqicards data={landingPageData.Aqicards}/>
      <Team data={landingPageData.Team} />
      <Gallery data={landingPageData.Gallery}/>
        <Contact  data={landingPageData.Contact} /> */}
        <Switch>
        
        <Route exact path="/" >
        <Navigation />
         <ReactNotifications />
      <Header data={landingPageData.Header} />
      <Aqi data={landingPageData.Aqi}/>
      <Aqihistory data={landingPageData.Aqihistory} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Aqicards data={landingPageData.Aqicards}/>
      <Team data={landingPageData.Team} />
      <Gallery data={landingPageData.Gallery}/>
      <Contact  data={landingPageData.Contact} /> 
          </Route>
          <Route path="/home" >
        <Navigation />
         <ReactNotifications />
      <Header data={landingPageData.Header} />
      <Aqi data={landingPageData.Aqi}/>
      <Aqihistory data={landingPageData.Aqihistory} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Aqicards data={landingPageData.Aqicards}/>
      <Team data={landingPageData.Team} />
      <Gallery data={landingPageData.Gallery}/>
      <Contact  data={landingPageData.Contact} /> 
          </Route>

        <Route
         path="/parameters" >
        <Navigation />
        <IndividualParameter />
          </Route>
        <Route path="/profile/:id">

            <Userprofile value={landingPageData.Userprofile}/>
          </Route>
        <Route path="/login"><Login/></Route>
        <Route path="/dashboard"><Dashboard/></Route>
        <Route path="/sensordata"><SensorData/></Route>
        <Route path="/managenotifications"><ManageNotifications/></Route>
        <Route path="/managesuggestions"><ManageSuggestions/></Route>
        <Route path="/aqi"><ViewAqi/></Route>
        <Route path="/aqihistory"><AqiHistory/></Route>
       </Switch>
      </Router>
     
    
    </div>
  );
};

export default App;
