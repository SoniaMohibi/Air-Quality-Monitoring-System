import  firebaseDB from '../firebase';
import MaterialTable from 'material-table'
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
export function IndividualParameter(){

  let history = useHistory();
  const [data, setData] = useState([])
  const columns = [
    { title: "Pollutant", field: "name" },
    { title: "Value", field: "phone" },
    { title: "Concentration", field: "email" },
    { title: "Units", field: 'website' }
  ]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])

  // window.scroll({bottom: 0, left: 0, behavior:"smooth"});


  return (
    <div >
      
      <h4 align='center' style={{color: '#1182f9',fontSize:26,fontWeight:600}}>Real-time Environmental Parameters Value</h4>
      <MaterialTable
        title="Pollutants Detail" 
        data={data}
        columns={columns}
        options={{
          exportButton: true,
            paging:false,
          search:false,
          headerStyle: {
            backgroundColor:'#1182f9',
            fontSize: 20,
            fontWeight:500,
            color:'white'
          }
         
          }
        }
      />
      <KeyboardBackspaceIcon  color='#1182f9' sx={{ fontSize: 38}} onClick={() => history.goBack()}/>
    </div>
  );
}

