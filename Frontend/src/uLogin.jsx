import React from "react";
import Navbar from './uNav';
import { Link } from "react-router-dom";
import Axios from 'axios';


class uLogin extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user_id : "", 
      pass : "",
    }
  }

  submit = (e)=>
  {
    this.state.is_valid = false;
    const url = sessionStorage.getItem('backend_url') + '/buyer_login';

    Axios.post(url,{
      'buyer_id' : this.state.user_id,
      'password' : this.state.pass
    }).then((res)=>{
      
      if(res.data){
        console.log('first_name:', res.data);
        sessionStorage.setItem('is_buyer', true);
//        console.log("contact:",res.data[0].contact_no);
        sessionStorage.setItem('password', this.state.pass);
        sessionStorage.setItem('buyer_id', this.state.user_id);
        sessionStorage.setItem('id_buyer', res.data[0].id);
        sessionStorage.setItem('user_name', res.data[0].first_name + res.data[0].last_name);
        sessionStorage.setItem('name', res.data[0].first_name + " " + res.data[0].last_name);        
        sessionStorage.setItem('user_id', this.state.user_id);
        sessionStorage.setItem('buyer_contact', res.data[0].contact_no);
        sessionStorage.setItem('buyer_date', res.data[0].date);
        this.props.history.push("/user-profile");
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
                <strong><h2 className="text-center">Customer Log In</h2></strong>
                <br></br>
                <div className="form-group">
                    <label><h4>Email</h4></label>
                    <input type="text" className="form-control form-control-lg" placeholder="Enter Your Email" onChange={(e)=>{
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
                    <Link to="/user-forgot-password" >Forgot password?</Link>
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

export default uLogin;
