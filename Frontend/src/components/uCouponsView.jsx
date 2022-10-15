import React from 'react';
import Navbar from './uNav';
import Card from "./uCouponCard";
import img1 from './images/coupons.JPG';
import { render } from "react-dom";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio, BallTriangle } from  'react-loader-spinner'
import axios from 'axios';
//import Loader from "react-loader-spinner";
// import Data from './uCouponCardData';
// import { Link } from "react-router-dom";
// import Axios from 'axios';



class uCouponsView extends React.Component{
     constructor(props){
       super(props)
       if(sessionStorage.getItem('buyer_id') == null){
        alert('You need to Login!');
        this.props.history.push('/user-home');
      }
        this.state = {
            isLoaded : false
        }
        this.fetchData = this.fetchData.bind(this);
        this.fetchOffersData = this.fetchOffersData.bind(this);
    //   this.state={
    //     // user_id : "", 
    //     // pass : "",
    //   }

        
     }
     componentDidMount() {
        this.fetchData();
        this.fetchOffersData();
      }

    async fetchData(){
        const url = sessionStorage.getItem('backend_url') + '/getTopCoupons';

        await axios.get(url).then((res)=>{
            this.setState({ records: res.data.filter(obj => obj.url !== null) });
            const shuffled = this.state.records.sort(() => 0.5 - Math.random());

            this.setState({records : shuffled.slice(0, 10)})
//            this.state.records = res.data.filter(obj => obj.url !== null);
            console.log(this.state.records);
            this.state.isLoaded = true;
            console.log(this.state.isLoaded);
        });
        
    }
    async fetchOffersData(){
        const buyer_id = sessionStorage.getItem('id_buyer');

        const url = sessionStorage.getItem('backend_url') + '/getPotentialCoupons/' + buyer_id;

        await axios.get(url).then((res)=>{
            this.setState({ offer_records: res.data.filter(obj => obj.url !== null) });
//            this.state.records = res.data.filter(obj => obj.url !== null);
            console.log(this.state.offer_records);
            this.state.isLoaded = true;
            console.log(this.state.isLoaded);
        });
        
    }

    // // submit()
    // // {
    // //   Axios.post('http://localhost:3001/login',{
    // //     'user_id' : this.state.user_id,
    // //     'password' : this.state.pass
    // //   }).then(()=>{alert('success');});
    // // }

   
    render(){
        const {records, offer_records} = this.state;
        return (
          <>
          <Navbar />
          
          { records && offer_records &&
          <div>
          <div className="my-5">
          </div>
          
          <div class="container text-center">
              <h1>Recommendation Dashboard</h1>
          </div>
          
          <div id="exTab1" class="container">	
              <ul class="nav nav-tabs">
                      <li class="active">
                      <a  href="#1" data-toggle="tab"><h4>Hot Offers</h4></a>
                      </li>
                      <li><a href="#2" data-toggle="tab"><h4>Offers For You</h4></a>
                      </li>
              </ul>
      
              <div class="tab-content ">
                  
                  <div class="tab-pane active" id="1">
                      <div classNameName="container py-5">
                          <div className="row justify-content-center mb-3" >
                              <div className="col-md-12 col-xl-10" style={{'background-color':"#eee"}}>
                                  {/* <Card imagesrc = "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"/> */}
                                  {/* <Card imagesrc = "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"/> */}
                                  {
                                    records.map((val,ind) => {
                                        return <Card key={ind} 
                                        imagesrc={val.url}
                                        title = {val.title}
                                        disclaimer = {val.disclaimer}
                                        id = {val.id}
                                        org = {val.NameOfOrganization}
                                        discount = {val.discount}

                                    />
                                        })
                                    }
                              </div>
                          </div>
                       </div>  
                  </div>
                  
                  <div class="tab-pane" id="2">
                  <div classNameName="container py-5">
                          <div className="row justify-content-center mb-3" >
                              <div className="col-md-12 col-xl-10" style={{'background-color':"#eee"}}>
                                  {/* <Card imagesrc = "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"/> */}
                                  {/* <Card imagesrc = "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"/> */}
                                  {
                                    offer_records.map((val,ind) => {
                                        return <Card key={ind} 
                                        imagesrc={val.url}
                                        title = {val.title}
                                        disclaimer = {val.disclaimer}
                                        id = {val.id}
                                        org = {val.NameOfOrganization}
                                        discount = {val.discount}

                                    />
                                        })
                                    }
                              </div>
                          </div>
                       </div>
                  </div>
              </div>
          </div>
          </div>
          }
          </>
    );}
    }
export default uCouponsView;