import React from 'react';
import web from "../src/images/home.png";
import { NavLink } from 'react-router-dom';
import Navbar from './uNav';


class uHome extends React.Component {

  constructor(props){
    super(props);
    if(sessionStorage.getItem('user_id') != null){
      this.props.history.push('/user-profile');
    }
  }

  render(){
  return (
    <> 
      <Navbar/>
      <section id="header" className="header">
        <div className="container">
          <div className="row justify-content-center" >
            <div className="col-md-12 col-xl-10">
                <div className="left col-md-7">
                        <div classname="details" style={{"text-align":"center"}}>                    
                              <h1> Find Coupons like never before with <br></br><strong className='brand-name'> Q-Pons User </strong> </h1>
          
                              <h2 > We provide the coupons you desire... </h2> <br></br>
                              
                              <div>
                                <NavLink to='/user-signup' className="btn-get-signup" style={{width:'130px','text-align':'center'}}> 
                                  Sign Up
                                </NavLink>

                                <NavLink to='/user-login' className="btn-get-signup" style={{'margin-left': '5px',width:'130px','text-align':'center'}}>
                                  Log In
                                </NavLink>
                              </div>

                        </div>
                  </div>
                  <div className="right col-md-5">
                    <img src={web} className="img-fluid animated" alt="home-img" />
                  </div>
                </div>
            </div>
            
        <br></br><br></br><br></br>     
        </div>  
    </section>
    </>
  );
  }
};

export default uHome;
