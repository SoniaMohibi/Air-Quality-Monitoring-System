import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import  firebaseDB from '../firebase';
import {Button,Card,ListGroup,ListGroupItem} from "react-bootstrap";
import { IndividualParameter } from './IndividualParameter';

// const aqidetails={
//   aqi:0,
//   aqilevel:'',
//   icon:''
// }

export const  Aqi=(props)=>{

    const iconArray=["good.png","moderate.png","unhealthy.png","hazardous.png","unhealthyFSG.png","veryUnheadlthy.png"]
    const [selectedIcon, setselectedIcon] = useState("good.png")
    var [aqi,setAQIValue] =useState(18)
    let history = useHistory()

          useEffect(() => {

          firebaseDB.child('aqi').on('value',snapshot=>{

            if(snapshot.val()!=null){
              setAQIValue(snapshot.val())
            }
            else
            setAQIValue()

            //   if(snapshot.val()>0 && snapshot.val()<150 ){
            //     setAQIValue(
            //       aqi=snapshot.val(),
            //       aqilevel="Good",
            //       icon:
            //      setselectedIcon(iconArray[])
            //     )
            //   }
            //   else if(snapshot.val()>150 && snapshot.val()<300 ){
            //     setAQIValue(
            //       aqi=snapshot.val(),
            //       aqilevel="Moderate",
            //       icon:
            //     )
            // }
            // else if(snapshot.val()>300 && snapshot.val()<500 ){
            //   setAQIValue(
            //     aqi=snapshot.val(),
            //     aqilevel="Hazardous",
            //     icon:
            //   )

           })

          },[]);

    return (
    <div>
    <Button className="lastupdate" variant="primary">LAST UPDATE</Button>
  <Card  className='aqicard'>
  <div className='aqiheader' >
  <div className='aqivalue'>
  <Card.Body className='bodyname'>
    <Card.Title  class="exactAqiValue" >AQI</Card.Title>
    <Card.Text >
      {aqi}
    </Card.Text>
     <Link to="/parameters"><Button onClick={<IndividualParameter/>}>View More</Button></Link> 
  </Card.Body>
  </div>
 <div className="aqilevel">
  <h2>
    <p>LIVE AQI INDEX</p>Level</h2>
    </div>
    <img className="aqiicons" src={selectedIcon} />
  </div>
  <ListGroup className="list-group-flush">
    <ListGroupItem><h4>OVERVIEW</h4></ListGroupItem>
    <ListGroupItem><h6>Current air Quality</h6>
    <Card.Body className='offset-0 row-md-3 row-sm-6'>
      <Card.Title style={{marginLeft:"-34px",padding:"10px"}} >Air Pollution Level &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<> Level </></Card.Title>
      <Card.Title style={{marginLeft:"-48px",padding:"10px"}}  >Air Quality Index &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<>{aqi}</></Card.Title>
      <Card.Title style={{marginLeft:"-16px",padding:"10px"}}  >Main Pollutant&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<>PM 2.5</></Card.Title>
    </Card.Body>

    </ListGroupItem>
  </ListGroup>
  {/* <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body> */}
</Card>
{/* <Notification/> */}
</div>
  )
}