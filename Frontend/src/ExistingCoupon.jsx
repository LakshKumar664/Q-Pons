import React from 'react';
import TableCard from './TableCard';
import axios from 'axios';

class Coupon extends React.Component {
    constructor(props){
        super(props);
    
        this.state={
            isdata : false
        }
        this.fetchData = this.fetchData.bind(this);
   }

    componentDidMount() {
        this.fetchData();
    }

    async fetchData(){
        const url = sessionStorage.getItem('backend_url') + '/listCoupons/' + sessionStorage.getItem('user_id');
        await axios.get(url).then((res)=>{
          console.log(res.data);
          this.setState({ records: res.data });
//          console.log(JSON.stringify(sessionStorage.getItem('exisitng_coupons')));
        });
            
    }

    async myExample(){
        const obj =sessionStorage.getItem('exisitng_coupons');
        for (var property in obj){
            this.state.records.push(obj[property])
          }
        console.log(this.state.records);

    }
    
    render(){
        const {records} = this.state;

      return (
        <>      
        <div class="container">
        <div class="row">
            <div class="col-12">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Coupon ID</th>
                    <th scope="col">Valid Until</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {records && records.map((val,ind) => {
                          return <TableCard key={ind} 
                                        ind = {ind+1}
                                        id = {val.id}
                                        discount = {val.discount}
                                        validDate = {val.validDate}
                                        quantity = {val.Quantity}
                                        Redeemed = {85}
                                        imgsrc = {val.url}
                             /> 
                })
                }

                {/* <tr>
                <th scope="row">2</th>
                    <td>88</td>
                    <td>30/06/2022</td>
                    <td>200</td>
                    <td>85</td>
                    <td>
                    <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button>
                    <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                    <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                    <a class="btn btn-lg btn-primary" style={{"background-color": "#ac2bac", 'margin-left':'1%'}} href="#!" role="button" onClick={()=>this.postInsta()}>
                    <i class="fab fa-instagram"></i></a>
              
                    </td>
                    
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>2218</td>
                    <td>5/07/2022</td>
                    <td>275</td>
                    <td>150</td>
                    <td>
                    <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button>
                    <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                    <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                    <a class="btn btn-lg btn-primary" style={{"background-color": "#ac2bac", 'margin-left':'1%'}} href="#!" role="button" onClick={()=>this.postInsta()}>
                    <i class="fab fa-instagram"></i></a>
              
                    </td>
                </tr> */}
                </tbody>
            </table>
            </div>
        </div>
        </div>


    </>
  );
      }
}

export default Coupon;