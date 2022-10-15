import React from 'react';
import Axios from 'axios';


class Social extends React.Component {

    postInsta(){
        const url = sessionStorage.getItem('backend_url') + '/postInsta';
        Axios.post(url,{"filename" : "laksh.jpg"}).then(()=>{alert('success');});
        }
    
    render(){
  
    return (
    <>
        
        <h3>Connect to Social Media Accounts</h3>

        {/* <!-- Facebook --> */}
        <a class="btn btn-lg btn-primary" style={{"background-color": "#3b5998", 'margin-right':'1%'}} href="#!" role="button"
        ><i class="fab fa-facebook-f"></i></a>

        {/* <!-- Twitter --> */}
        <a class="btn btn-lg btn-primary" style={{"background-color": "#55acee", 'margin-right':'1%'}} href="#!" role="button"
        ><i class="fab fa-twitter"></i></a>

        {/* <!-- Google --> */}
        <a class="btn btn-lg btn-primary" style={{"background-color": "#dd4b39", 'margin-right':'1%'}} href="#!" role="button"
        ><i class="fab fa-google"></i></a>

        {/* <!-- Instagram --> */}
        <a class="btn btn-lg btn-primary" style={{"background-color": "#ac2bac", 'margin-right':'1%'}} href="#!" role="button" onClick={()=>this.postInsta()}>
        <i class="fab fa-instagram"></i></a>


        {/* <!-- Whatsapp --> */}
        <a class="btn btn-lg btn-primary" style={{"background-color": "#25d366", 'margin-right':'1%'}} href="#!" role="button"
        ><i class="fab fa-whatsapp"></i
        ></a>
    </>
    );
  }
}
export default Social;
