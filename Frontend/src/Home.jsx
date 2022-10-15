import React from 'react';
import web from "../src/images/home.png";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';


class Home extends React.Component {

  constructor(props){
    super(props);
    if(sessionStorage.getItem('user_id') != null){
      this.props.history.push('/profile');
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
                              <h1> Customize your own Coupons with <br></br><strong className='brand-name'> Q-Pons Generator </strong> </h1>
          
                              <h2 > We provide the coupons services you need </h2> <br></br>
                              
                              <div>
                                <NavLink to='/Signup' className="btn-get-signup" style={{width:'130px','text-align':'center'}}> 
                                  Sign Up
                                </NavLink>

                                <NavLink to='/Login' className="btn-get-signup" style={{'margin-left': '5px',width:'130px','text-align':'center'}}>
                                  Log In
                                </NavLink>
                              </div>

                              <div style={{'text-align':'center'}}>
                                <br></br><br></br><br></br>
                                <h3>Looking to buy coupons?</h3>
                                <NavLink to ='/user-home' className="btn-get-signup" style={{'margin-left': '0px',width:'200px','text-align':'center'}}>
                                  Q-Pons User
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

export default Home;
