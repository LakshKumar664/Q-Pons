import React, { useState, useHistory, useEffect } from 'react';
import Axios from 'axios';
// import { Modal, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
import Navbar from './afterLoginNavbar';
import Social from './Social';
import Emailing from './Emailing';
import Recommendations from './Recommendations';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class Service extends React.Component {
  
  constructor(props){
    super(props);
    if(sessionStorage.getItem('user_id') == null){
      this.props.history.push('/');
    }

    this.state = {
      activeObject : null
    }
  }

  render(){
  
    return (
    <>
    <Navbar/>
      <div class="container my-5 text-center"><h1>Services Dashboard</h1></div>
    
      <div id="exTab2" className="container">	
        <ul class="nav nav-tabs">         
            <li class="active"> <a  href="#1" data-toggle="tab"> <h4> Recommendations </h4> </a> </li> 
            <li> <a  href="#2" data-toggle="tab"> <h4> Email Services </h4> </a> </li>            
            <li> <a href="#3" data-toggle="tab"><h4>Social Media</h4></a> </li>
        </ul>
      <div class="tab-content ">

          <div class="tab-pane text-center active" id="1">
              <Recommendations/>            
          </div>

          <div class="tab-pane text-center" id="2">
              <Emailing/>            
          </div>
            
          <div class="tab-pane text-center" id="3">
              <Social/>
          </div>
          
      </div>
    </div>
    </>
  );
  }
  
}
export default Service;