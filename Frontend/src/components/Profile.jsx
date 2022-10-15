import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//import Navbar from './Navbar';
import Navbar from './afterLoginNavbar.js';

class Profile extends React.Component {

    constructor(props){
        super(props);

        if(sessionStorage.getItem('user_id') == null){
            this.props.history.push('/');
        }
    }

    render(){
  return (
    <>
    <Navbar/>
       <div className="my-5">
        <h1 className="text-center">  Profile Information </h1>
      </div>
        
        <div class="row container mx-auto">
            
            <div class="col-lg-10 mx-auto">
            
                <div class="card user-card-full">
            
                    <div class="row m-l-0 m-r-0">
            
                        <div class="col-sm-4 col-lg-12 ms-auto user-profile">
            
                            <div class="card-block text-center">
            
                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile"/> </div>
            
                                <h1 style={{color:"gray"}}>{sessionStorage.getItem('name')}</h1> 
            
                                <br></br>
            
                              </div>
            
                        </div>
                        
                        <div class="col-sm-8 col-lg-12">
                         
                            <div class="card-block text-center"  style={{'margin-bottom':'2%'}}>
                         
                                <div class="row">
                         
                                    <div class="col-sm-6">
                         
                                        <h4 class="m-b-10 f-w-600">Email</h4>
                         
                                        <h4 class="text-muted f-w-400">{sessionStorage.getItem('user_id')}</h4>
                         
                                    </div>
                         
                                    <div class="col-sm-6">
                         
                                        <h4 class="m-b-10 f-w-600">User ID</h4>
                         
                                        <h4 class="text-muted f-w-400">{sessionStorage.getItem('user_name')}</h4>
                         
                                    </div>



                                    <div class="col-sm-6">

                                        <h4 class="m-b-10 f-w-600">Phone</h4>

                                        <h4 class="text-muted f-w-400">+92 900 78601</h4>

                                    </div>

                                    
                                    <div class="col-sm-6">
                                    
                                      <Link to="/changepassword" class="btn btn-lg btn-dark" style={{width:'150px', 'margin-top':'1%'}}>Change Password </Link>
                                    
                                    </div>

                                </div>
                        </div>

                    </div>

            </div>

            </div>

            </div>

        </div>
    </>

);
  }
}

export default Profile;