import React from "react"
import { Link } from "react-router-dom";
import Axios from "axios";
import Navbar from './Navbar';

class ChangePassword extends React.Component{

    constructor(props){
        super(props)
        this.state={
            currentPass : "", 
            newPass : "",
            confirmPass : ""
        }
    }

    changePass = (e)=>{

        if(this.state.currentPass != sessionStorage.getItem('password') || this.state.newPass != this.state.confirmPass){
            e.preventDefault();
            alert('Error, Current Password doesnot match!');
            return;
        }

        else{
            const url = sessionStorage.getItem('backend_url') + '/updatePass';

            Axios.post(url,{
                'user_id' : sessionStorage.getItem('user_id'),
                'newPass' : this.state.newPass
              }).then((res)=>{
                
                if(res.data){
                    sessionStorage.setItem('password', this.state.newPass);
                }
                else{
                  e.preventDefault();
                }
              });
        }
    }


    render(){
        return (
            <>
            <Navbar />
            <div class="row container mx-auto">
                <div class="col-sm-4 col-lg-4 mx-auto">
                    
                    <h3>Current Password</h3>
                    <div class="form-group pass_show"> 
                        <input type="password" class="form-control form-control-lg" placeholder="Current Password"  onChange={(e)=>{
                            this.state.currentPass = e.target.value;
                        }} /> 
                    </div> 

                    <h3>New Password</h3>

                    <div class="form-group pass_show"> 

                        <input type="password" class="form-control form-control-lg" placeholder="New Password" onChange={(e)=>{
                            this.state.newPass = e.target.value;
                        }} /> 

                    </div> 

                    <h3>Confirm Password</h3>
                    <div class="form-group pass_show"> 
                        <input type="password" class="form-control form-control-lg" placeholder="Confirm Password"  onChange={(e)=>{
                            this.state.confirmPass = e.target.value;
                        }} /> 
                    </div> 

                    <div className="" style={{display:'flex','justify-content' : 'space-between'}}>
                        
                        <Link to="/profile" type="button" class="btn btn-dark btn-lg" style={{width:'150px'}}>Cancel</Link>
                        
                        <Link to="/profile" type="button" class="btn btn-dark btn-lg" style={{width:'150px'}} onClick={this.changePass}>
                                Change Password
                        </Link>                     
                    
                    </div>

                </div>  
            </div>
        </>
    );
}
};
export default ChangePassword;