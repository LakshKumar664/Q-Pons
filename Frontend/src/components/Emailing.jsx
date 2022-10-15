import React from 'react';
import Axios from 'axios';
import MailingList from './MailingList';


class Emailing extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isData: false,
            first_name : "",
            last_name : "",
            email : ""
        }
        this.fetchReceivingList = this.fetchReceivingList.bind(this);
    }
    
    componentDidMount() {
        this.fetchReceivingList();
    }


    async sendEmail(){
        const url = sessionStorage.getItem('backend_url') + '/sendEmail';
        await Axios.post(url,{
            'seller_id' : sessionStorage.getItem('user_id')
        }).then(()=>{alert('success');});
      }

    removeFromMail = () =>{
        //console.log('add');
        const url = sessionStorage.getItem('backend_url') + '/removeMailBuyer';

        Axios.post(url, {
            'seller_id' : sessionStorage.getItem('user_id'),
            'buyer_id': this.state.email
        }).then((res)=>{
                if(res.data === 'deleted'){
                    alert('Removed!');
                }
        })
   }
    
     async fetchReceivingList(){
        const url = sessionStorage.getItem('backend_url') + '/getMailingList';
    
       await Axios.post(url,{
            "user_id" : sessionStorage.getItem('user_id') 
        }).then((res)=>{
            const arrayUniqueByKey = [...new Map(res.data.map(item =>
                [item['email'], item])).values()];
//            const uniqueAges = res.data.map(item => item.email).filter((value, index, self) => self.indexOf(value) === index)
            //const uniqueAges = [new Set(res.data.map(obj => obj.email))];
            this.setState({records:arrayUniqueByKey});
            console.log(this.state.records);
        }); 
    
      }

    

  render(){
    const {records} = this.state;

    return (
    <>

         <h3 className="mt-4">Email Services</h3>
         <br></br>
         <div id="exTab2" class="container border-top">
            <div className="col-md-6 col-lg-3 col-xl-3 align-items-center border-end mt-4">
                <ul class="nav nav-tabs flex-column border-bottom">         
                    <li class="active"> <a  href="#5" data-toggle="tab"> <h4> Send Coupon via Mail </h4> </a> </li> 
                    <li> <a  href="#6" data-toggle="tab"> <h4> View Mailing List </h4> </a> </li>            
                    <li> <a href="#7" data-toggle="tab"><h4>Remove A Person</h4></a> </li>
                </ul>
            </div>


      <div class="tab-content col-md-6 col-lg-9 col-xl-9 align-items-center border-end mt-4">

          <div class="tab-pane text-center active" id="5">
              <strong><h2> Send Coupons To Mailing List </h2></strong>
              <button type="button" class="btn btn-lg btn-dark" style={{width:'150px', 'margin-top':'1%'}} onClick={()=>this.sendEmail()}>Send Now</button> 
          </div>

          <div class="tab-pane text-center" id="6">
              <div className='mx-auto'>
                  <strong><h2> Coupon Mailing List </h2></strong>
                  <table class="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                {
                    records && records.map((val, ind)=>{
                        return <MailingList key={ind}
                        ind = {ind+1}
                            name = {val.first_name + " " + val.last_name}
                            email = {val.email}
                        />  
                    })
                }
            </table>

              </div>  

          </div>
            
          <div class="tab-pane text-center" id="7">
              <strong><h2 className="text-center">Remove A Person From Mailing List</h2></strong>
              <br></br>
                    
                <div className='col-4 mx-auto'>
                    <div className="form-group text-left">
                        <label><h4>First Name</h4></label>
                        <input type="text" className="form-control form-control-lg" placeholder="First Name" required={true} onChange={(e)=>{
                            this.setState({first_name : e.target.value});
                        }}/>     
                        <br></br>
                                  
                        <label><h4>Last Name</h4></label>
                        <input type="text" className="form-control form-control-lg" placeholder="Last Name" required={true} onChange={(e)=>{
                            this.setState({last_name : e.target.value});
                        }} />
                        <br></br>
                    
                        <label><h4>Email</h4></label>
                        <input type="email" className="form-control form-control-lg" placeholder="me@domain.com" required={true} onChange={(e)=>{
                            this.setState({email : e.target.value});
                        }}/>
                        <br></br>
                    
                        <a href="" data-toggle="tab" type="submit" className="btn btn-dark btn-block btn-lg" onClick={this.removeFromMail}>Remove Person</a>

                    </div>
              </div>
          </div>
          
      </div>
    </div>
        
{/*           
            <div className='ButtonGroup' style={{display:'grid', 'margin-top':'5px'}}>
              <button type="button" class="btn btn-lg btn-dark" style={{width:'150px', 'margin-top':'1%'}} onClick={()=>this.sendEmail()}>Send Coupon via Mail</button>           
              <button type="button" class="btn btn-lg btn-dark" style={{width:'150px', 'margin-top':'1%'}} onClick={()=>this.fetchReceivingList()}>View Mailing List</button>
              <button type="button" class="btn btn-lg btn-dark" style={{width:'150px', 'margin-top':'1%'}}>Add A Person </button>
              <button type="button" class="btn btn-lg btn-dark" style={{width:'150px', 'margin-top':'1%'}}>Remove A Person </button>
            </div> */}
    </>
    );
  }
}
export default Emailing;
