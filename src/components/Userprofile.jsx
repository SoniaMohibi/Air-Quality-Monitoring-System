import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
export const  Userprofile=({value})=>{
   const {id}=useParams();
   console.log(value)
   
      return(
         <div className="headingprofile">
            <h1><b><i>User Profile</i></b></h1>
      
        <div key={`${value[id].name}`} className="profile">
         
         <div><img src={value[id].img} alt='...'  className='imgprofile'/></div> 
          <div className='detail'>
            <h1><b>{value[id].name}</b></h1>
            <h4>{value[id].post}</h4>
            <h1>Biography</h1>
            <p>{value[id].about}</p>
            <Table >
  <thead>
    <tr>
      <th>Degree</th>
      <th>From</th>
      <th>Major</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{value[id]['degree'][0]}</td>
      <td>{value[id]['From'][0]}</td>
      <td>{value[id]['Major'][0]}</td>
      <td>{value[id]['Year'][0]}</td>
    </tr>
    <tr>
      <td>{value[id]['degree'][1]}</td>
      <td>{value[id]['From'][1]}</td>
      <td>{value[id]['Major'][0]}</td>
      <td>{value[id]['Year'][1]}</td>
    </tr>
    <tr>
      <td>{value[id]['degree'][2]}</td>
      <td >{value[id]['From'][2]}</td>
      <td>{value[id]['Major'][2]}</td>
      <td>{value[id]['Year'][2]}</td>
    </tr>
  </tbody>
</Table>
          </div>
          </div>
      </div>
      )
    }