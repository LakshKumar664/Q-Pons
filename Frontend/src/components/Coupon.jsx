import React from 'react';
import Table from "./ExistingCoupon"
import Card from "./Card";
import Data from "./CardData";
import Form from "react-bootstrap/Form";
import Navbar from './afterLoginNavbar';
import AddTemplate from './AddTemplate';
import axios from 'axios';
import Axios from 'axios';


class Coupon extends React.Component {
  constructor(props){
    super(props)
    if(sessionStorage.getItem('user_id') == null)
    {
      this.props.history.push('/');
    }
    this.state={
      date : "",
      img_src : "",
      quantity : 1,
      data : ""
    }

//    this.fetchData();
    
  }


  fileSelect = event => { 
    this.setState({img_src : event.target.files[0]});
  }


submit(){
  const data = new FormData() ;
  console.log(this.state.img_src);
  data.append('file', this.state.img_src);   
  data.append('valid_date' , this.state.date);
  data.append('quantity' , this.state.quantity);
  data.append('user_id', sessionStorage.getItem('user_id')); 
  const url_link = sessionStorage.getItem('backend_url') + '/uploadFlyer';

  return Axios({
      method: 'post',
      url: url_link,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
  });


}

  async clickk(){
    const url = sessionStorage.getItem('backend_url') + '/listCoupons/' + sessionStorage.getItem('user_id');
    await axios.get(url).then((res)=>{
      sessionStorage.setItem('exisitng_coupons', res.data);
      console.log(res.data);
      console.log(JSON.stringify(sessionStorage.getItem('exisitng_coupons')));
    });

  }

  render(){
  return (
    <>
    <Navbar />
    <div className="my-5">
      </div>
      <div class="container text-center"><h1>Coupon Dashboard</h1></div>
    
    <div id="exTab2" class="container">	
        <ul class="nav nav-tabs">
            <li class="active">
              <a  href="#1" data-toggle="tab"><h4>Create New</h4></a>
            </li>
            <li><a href="#2" data-toggle="tab" onClick={()=>this.clickk()}><h4>Existing Coupons</h4></a>
            </li>
        </ul>

      <div class="tab-content ">
          
          <div class="tab-pane active" id="1">
            
            <h3>Choose your Coupon Type</h3>

            <div id="exTab2" class="container">	
              <ul class="nav nav-tabs">
                    <li class="active"> <a  href="#4" data-toggle="tab"> <h4> Templates </h4> </a> </li>                 
                    <li><a href="#5" data-toggle="tab"> <h4> Customized </h4> </a> </li>
                    <li><a href="#6" data-toggle="tab"> <h4> Flyer </h4> </a> </li>
              </ul>
            </div>

            <div class="tab-content">
              
              <div class="tab-pane active" id="4">
                <h1 className='text-center'>Templates Designs</h1> <br></br>                
                  <div className="container-fluid mb-5">
                    <div className="row">
                      <div className="col-10 mx-auto">
                        <div className="row gy-4">
                          {
                            Data.map((val,ind) => {
                              return <Card key={ind} 
                                imgsrc={val.imgsrc}
                                title = {val.title}
                              />
                            })
                          }                              
                        </div>
                      </div>
                    </div>
                  </div>
              </div>


              <div class="tab-pane" id="5">
                <AddTemplate/>
                {/*  */}
              </div>


              <div class="tab-pane" id="6">
                <div className="my-5"> <h1 className="text-center">  Flyer Information </h1> </div>
                  <div className="container contact_div">
                    <div className="row">
                      <div className="col-md-6 col-10 mx-auto">
                        <div class="mb-3">
                          <label for="formFile" className="form-label"><h4>Valid Until</h4></label>
                          <Form.Control className="form-control form-control-lg" type="date" name='valid_until' 
                            onChange={(e)=>{this.setState({date : e.target.value});}}/>
                        </div>

                        <div class="mb-3">
                          <label for="formFile" className="form-label"><h4>Upload Flyer Picture</h4></label>
                          <input class="form-control form-control-lg" type="file" id="formFile" onChange={this.fileSelect}/>
                        </div>

                        <div class="mb-3">
                          <label for="quant" className="form-label"><h4>Quantity</h4></label>
                          <input className="form-control form-control-lg" type="number" name='quant' min={1}
                              onChange={(e)=>{this.setState({quantity : e.target.value});}} />
                        </div>

                        <div className="text-right">                    
                          <button type="button" class="btn btn-dark btn-lg" style={{'margin-left' : '5px'}} onClick={()=>this.submit()}> Submit </button>                     
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

          </div>
          
          <div class="tab-pane" id="2">
            <h3>Following Coupons exists in the database:</h3>
            <div className='table'> <Table/> </div>
          </div>
      </div>
    </div>


    </>
  );}
}

export default Coupon;