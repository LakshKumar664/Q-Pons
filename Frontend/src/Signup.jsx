import React from "react";
import google from "../src/images/signup/google-logo.png";
import { Link } from "react-router-dom";
import Axios from 'axios';
import Navbar from './Navbar';


class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state={
      first_name : "", 
      last_name : "", 
      user_id : "", 
      email : "",
      pass : "",
      verify_pass : "",
      google_form : ""
    }
  }

  validatePassword(){
    if(this.state.pass != this.state.verify_pass){
    //      alert("Password doesn't match!");
      return false;
    }
    return true;
  }

  isEmpty(){
    if(this.state.pass === "" || this.state.pass === " " || this.state.email === "" || this.state.email === " " ||
    this.state.first_name === "" || this.state.first_name === " " || this.state.last_name === "" || this.state.last_name === " " || 
    this.state.verify_pass === "" || this.state.verify_pass === " " || this.state.google_form === "" || this.state.google_form === " "){
      return true;
    }
    return false;

  }

  submit = (e) => {

    if(this.isEmpty()){
      alert("Empty Fields!")
      e.preventDefault();
      return;
    }

    if(!this.validatePassword()){
      alert("Password Doesn't match")
      e.preventDefault();
      return;
    }

    const url = sessionStorage.getItem('backend_url') + '/Signup';

    Axios.post(url,{
      'first_name' : this.state.first_name,
      'last_name' : this.state.last_name,
      'email' : this.state.email,
      'password' : this.state.pass,
      'link' : this.state.google_form
    }).then((res)=>{
        if(res.data === "Updated!")
          {
            alert('successfully created');
          }
          else{
            alert('Entity already Exists!')
            e.preventDefault();
          }
    });
    
    localStorage.setItem('google_form', this.state.google_form);
  }

  render(){
      return (
      <> 
      <Navbar/>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-4 mx-auto'>

              <form>
                <strong><h2 className="text-center">Sign Up</h2></strong>
                <div className="form-group">
                    <label><h4>First Name</h4></label>
                    <input type="text" className="form-control form-control-lg" placeholder="First Name" required={true} onChange={(e)=>{
                        this.setState({first_name : e.target.value});
                    }}/>
                    <br></br>
                
                    <label><h4>Last Name</h4></label>
                    <input type="text" className="form-control form-control-lg" placeholder="Last Name" required={true} onChange={(e)=>{
                        this.setState({last_name : e.target.value});
                    }} />
                    <br></br>
                
                    <label><h4>Email</h4></label>
                    <input type="email" className="form-control form-control-lg" placeholder="me@domain.com" required={true} onChange={(e)=>{
                        this.setState({email : e.target.value});
                    }}/>
                    
                </div>
                <div className="form-group">
                     <label><h4>Google Form Link</h4></label>
                    <input type="url" className="form-control form-control-lg" placeholder="Enter Google Form" required={true} onChange={(e)=>{
                        this.setState({google_form : e.target.value});
                    }} />
                    <label><h4>Password</h4></label>
                    <input type="password" className="form-control form-control-lg" placeholder="Enter password" required={true} onChange={(e)=>{
                        this.setState({pass : e.target.value});
                    }}/>
                    <br></br>
                
                    <label><h4>Verify Password</h4></label>
                    <input type="password" className="form-control form-control-lg" placeholder="Enter password" required={true} onChange={(e)=>{
                        this.setState({verify_pass : e.target.value});
                    }} />
                
                </div>
                <Link to="/profile" type="submit" className="btn btn-dark btn-block btn-lg" onClick={this.submit}>Sign Up</Link>
              
              </form>
            </div>
        </div>
    </div>
    <br></br>
                
    </>
  );}
};

export default Signup;
