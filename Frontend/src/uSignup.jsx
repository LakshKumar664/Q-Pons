import React from "react";
import Form from "react-bootstrap/Form";
import google from "../src/images/signup/google-logo.png";
import { Link } from "react-router-dom";
import Axios from 'axios';
import Navbar from "./uNav";
import { Nav } from "react-bootstrap";

class uSignup extends React.Component{
  constructor(props){
    super(props)
    this.state={
      first_name : "", 
      last_name : "", 
      email : "",
      pass : "",
      verify_pass : "",
      date: "",
      contact: ""
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
    this.state.verify_pass === "" || this.state.verify_pass === " " || this.state.date === "" || this.state.date === " " 
    || this.state.contact === "" || this.state.contact === " "){
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

    const url = sessionStorage.getItem('backend_url') + '/SignupBuyer';

    Axios.post(url,{
      'first_name' : this.state.first_name,
      'last_name' : this.state.last_name,
      'email' : this.state.email,
      'password' : this.state.pass,
      'date' : this.state.date,
      'contact' : this.state.contact
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
    
  }

  render(){
      return (
      <> 
        <Navbar/>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-4 mx-auto'>

              <form>
                <strong><h2 className="text-center">Customer Sign Up</h2></strong>
                <div className="form-group">
                    <label><h4>First Name</h4></label>
                    <input type="text" className="form-control form-control-lg" placeholder="First Name" onChange={(e)=>{
                        this.setState({first_name : e.target.value});
                    }}/>
                    <br></br>
                
                    <label><h4>Last Name</h4></label>
                    <input type="text" className="form-control form-control-lg" placeholder="Last Name" onChange={(e)=>{
                        this.setState({last_name : e.target.value});
                    }} />
                    <br></br>
                
                    <label><h4>Email</h4></label>
                    <input type="email" className="form-control form-control-lg" placeholder="me@domain.com" onChange={(e)=>{
                        this.setState({email : e.target.value});
                    }}/>

                    <label><h4>Contact No</h4></label>
                    <input type="text" className="form-control form-control-lg" placeholder="+92333-3333333" onChange={(e)=>{
                        this.setState({contact : e.target.value});
                    }}/>
                    
                </div>
                <div className="form-group">
                     <label><h4>Date of Birth</h4></label>
                     <Form.Control className="form-control form-control-lg" type="date" name='valid_until'
                          onChange={(e)=>{this.setState({date : e.target.value});}}
                      />

                    <label><h4>Password</h4></label>
                    <input type="password" className="form-control form-control-lg" placeholder="Enter password" required onChange={(e)=>{
                        this.setState({pass : e.target.value});
                    }}/>
                    <br></br>
                
                    <label><h4>Verify Password</h4></label>
                    <input type="password" className="form-control form-control-lg" placeholder="Enter password" onChange={(e)=>{
                        this.setState({verify_pass : e.target.value});
                    }} />
                
                </div>
                <Link to="/user-home" type="submit" className="btn btn-dark btn-block btn-lg" onClick={this.submit}>Sign Up</Link>
              
              </form>
            </div>
        </div>
    </div>
    <br></br>
                
    </>
  );}
};

export default uSignup;
