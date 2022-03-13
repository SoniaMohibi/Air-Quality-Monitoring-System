import profile from '../pro.png';
import {Link} from 'react-router-dom'
import { SensorData } from './SensorData';
import { ManageNotifications } from './ManageNotifications';
import { ManageSuggestions } from './ManageSuggestions';

export  const Dashboard = () =>{
  return (
    <div className="App">
      <div className="admin-header">
      <div className="w3-row">
      <div className="w3-half"><h4 className="h4">Admin Panel</h4></div>
      <div className="w3-half"><button className="logout">Logout</button></div>
      </div>
      </div>
      <div className="w3-row">
      <div className="w3-third">
      <div className="leftside">
        <center><img src={profile} className="profileimg" /></center>
        <br />
        <h5 className="h5"><span className="welcome">Welcome: </span>Admin</h5>
        <div className="w3-row">
        <ul className='leftMenu'>
          <li>
              <a href="#"><i className='fa fa-dashboard iconcolor' aria-hidden='true'></i> &nbsp;Dashboard</a>              
          </li>
          <li>
            <Link to="/sensordata"> <a href={<SensorData/>}><i className='fa fa-line-chart iconcolor' aria-hidden='true'></i> &nbsp;Manage Sensor Data</a> </Link>             
          </li>
          <li>
          <Link to="/managenotifications"> <a href="#"><i className='fa fa-bell-o iconcolor' aria-hidden='true'></i> &nbsp; Manage Notifications</a>  </Link>             
          </li>
          <li>
          <Link to="/aqi"> <a href="#"><i className='fa fa-eye iconcolor' aria-hidden='true'></i> &nbsp;View AQI</a> </Link>      
          </li>
          <li>
              <a href="/aqihistory"><i className='fa fa-area-chart iconcolor' aria-hidden='true'></i> &nbsp;View AQI Reporting</a>              
          </li>
          <li>
              <a href="/managesuggestions"><i className='fa fa-lightbulb-o iconcolor' aria-hidden='true'></i> &nbsp;Suggestions</a>              
          </li>
      </ul>

        </div>
      </div>
      </div>   
      <div className="w3-rest content" style={{padding:"1%"}}>
        {/* demo */}
    <div class="w3-row-padding" >
        <Link to="/sensordata">
    <div class="w3-col s4 databox">
      <div class="w3-container w3-blue w3-padding-16">
        <div class="w3-left"><i class="fa fa-line-chart w3-xlarge"></i></div>
        <div class="w3-clear"></div>
        <h5>Sensor Data</h5>
      </div>
    </div>
    </Link>
    <Link to="/managenotifications">
    <div class="w3-col s4 databox" style={{paddingLeft:"1%"}} >
      <div class="w3-container w3-blue w3-padding-16">
        <div class="w3-left"><i class="fa fa-bell-o w3-xlarge"></i></div>
        <div class="w3-clear"></div>
        <h5>Notifications</h5>
      </div>
    </div>
    </Link>
    <Link to="/aqi">
    <div class="w3-col s4 databox" style={{paddingLeft:"1%"}} >
      <div class="w3-container w3-blue w3-padding-16">
        <div class="w3-left"><i class="fa fa-eye w3-xlarge"></i></div>
        <div class="w3-clear"></div>
        <h5>View AQI</h5>
      </div>
    </div>
    </Link>
  </div>

  <div class="w3-row " style={{padding:"1%"}}>
      <Link to="/aqihistory">
  <div class="w3-half databox">
      <div class="w3-container w3-blue w3-text-white w3-padding-16">
        <div class="w3-left"><i class="fa fa-area-chart w3-xlarge"></i></div>
        <div class="w3-right">
        </div>
        <div class="w3-clear"></div>
        <h5>AQI Report</h5>
      </div>
    </div>
    </Link>
    <Link to="/managesuggestions"> 
    <div class="w3-half databox" style={{paddingLeft:"2%"}}>
      <div class="w3-container w3-blue w3-text-white w3-padding-16">
        <div class="w3-left"><i class="fa fa-lightbulb-o w3-xlarge"></i></div>
        <div class="w3-clear"></div>
      <h5>Suggestions</h5>
      </div>
    </div>
    </Link>
  </div>

        {/* end */}
    </div>      
      </div>
    </div>
  );
}
