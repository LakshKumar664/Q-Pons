import React from "react";
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";
import Axios from 'axios';
import Navbar from './Navbar';


class Login extends React.Component{
  
  
  constructor(props){
    super(props)
    this.state={
      user_id : "", 
      pass : "",
      redirect : false,
      is_valid : false
    }
  }


  submit = (e)=>
  {
    this.state.is_valid = false;
    const url = sessionStorage.getItem('backend_url') + '/login';

    Axios.post(url,{
      'user_id' : this.state.user_id,
      'password' : this.state.pass
    }).then((res)=>{
      
      if(res.data){
        console.log('first_name:', res.data);
        sessionStorage.setItem('is_buyer', true);
        
        localStorage.setItem('user_id', this.state.user_id);
        sessionStorage.setItem('password', this.state.pass);
        sessionStorage.setItem('user_id', this.state.user_id);
        sessionStorage.setItem('user_name', res.data[0].first_name + res.data[0].last_name);
        sessionStorage.setItem('name', res.data[0].first_name + " " + res.data[0].last_name);        
        sessionStorage.setItem('user_id', this.state.user_id);
        this.props.history.push("/profile");
      }
      else{
        alert('Login Failed!');
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

                <br></br> 

                <strong><h2 className="text-center">Log In</h2></strong>

                <br></br>

                <div className="form-group">

                    <label><h4>Username/Email</h4></label>

                    <input type="text" className="form-control form-control-lg" placeholder="Enter Your username/email" onChange={(e)=>{

                        this.setState({user_id : e.target.value});

                    }}/>

                </div>

                <div className="form-group">

                    <label><h4>Password</h4></label>

                    <input type="password" className="form-control form-control-lg" placeholder="Enter password" onChange={(e)=>{

                        this.setState({pass : e.target.value});

                    }}/>

                </div>

                <a className="btn btn-dark btn-block btn-lg" onClick={this.submit}>Submit</a>

                <h5 className="forgot-password text-right">

                    <br></br>

                    <Link to="/forgot" >Forgot password?</Link>

                </h5>
            </form>
            </div>
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>

    </>
  );}
};

export default withRouter(Login);