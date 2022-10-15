import React from 'react';
import axios from 'axios';
import Navbar from './uNav';
import Tab from './tableData';

class uWishlist extends React.Component {
     constructor(props){
         super(props);
         if(sessionStorage.getItem('buyer_id') == null){
            alert('You need to Login!');
            this.props.history.push('/user-home');
          }

         this.state={
             records : [{"id":"88"}]
         }
         this.fetchData = this.fetchData.bind(this);

         //const url = sessionStorage.getItem('backend_url') + '/listCoupons/' + sessionStorage.getItem('user_id');
         //axios.get(url).then((res)=>{
        //     this.state.records = res;
        //     console.log(this.state.records.data[0].id);
        // });
     }
     componentDidMount() {
        this.fetchData();
      }

      componentDidUpdate(prevProps, prevState) {
        if (prevState.records !== this.state.records) {
          console.log('pokemons state has changed.')
        }
      }

    async fetchData(){
        const url = sessionStorage.getItem('backend_url') + '/wishList/' + sessionStorage.getItem('buyer_id');

        await axios.get(url).then((res)=>{
          
            this.setState({ records: res.data });
//            this.state.records = res.data.filter(obj => obj.url !== null);
            console.log(this.state.records);
        });
        
    }

    // postInsta(){}

    // myExample(){

    // }
    
    render(){
        const {records} = this.state;
      return (
        <>      
        <Navbar/>    
        <div class="container">
            <h1 style={{"align-text":"center"}}>WishList</h1> 
        <div class="row">
            <div class="col-12">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Coupon ID</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Valid Until</th>
                    <th scope="col">Redeemed</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {records && records.map((val,ind) => {
                          return <Tab key={ind} 
                                        ind = {ind}
                                        id = {val.id}
                                        discount = {val.discount}
                                        validDate = {val.validDate}
                                        Redeemed = {85}
                                        imgsrc = {val.url}
                             /> 
                })
                }

                
                </tbody>
            </table>
            </div>
        </div>
      </div>


    </>
  );
      }
}

export default uWishlist;