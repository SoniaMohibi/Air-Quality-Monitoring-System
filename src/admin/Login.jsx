import { useState } from "react";
export const Login = () =>{
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
//    alert(inputs);
  }
  return (
    <>
      <center>
    <div className="admincontainer">
      <div >
      <div className="w3-row">
      <div className="w3-half"><h4 style={{color:"#fff",marginTop:"20px"}}>Admin Login</h4></div>
      </div>
      </div>
   
      <form onSubmit={handleSubmit} className="loginform">
      <h3  style={{color:"#808080"}}>Login</h3>
      <input 
        type="text" 
        name="number" 
        value={inputs.number || ""} 
        onChange={handleChange}
        placeholder="Username"
      />
        <input 
          type="password" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
          placeholder="Password"
      />
        <input type="submit" value="Sign in" />
        <br/><br/>
        <a href="#" className="lostpassword">Lost Your Password?</a>
    </form>
      </div>
      </center></>
  )
}
