import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import BuyerCard from './BuyerCard';


class Recommendations extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isData : false
        }
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
      }

    async fetchData(){
        const coupon_id = sessionStorage.getItem('selected_coupon') || '1011';

        const url = sessionStorage.getItem('backend_url') + '/getPotentialBuyers/' + coupon_id ;

        await axios.get(url).then((res)=>{
            this.setState({ records: res.data });
            console.log(this.state.records);
        });
        
    }

    
    render(){
        const {records} = this.state;
    return (
    <>
        <h3>Potential Coupon Redeemers</h3>

        <div className="container">
            {records && records.map((val,ind) => {
                          return <BuyerCard key={ind} 
                                        id = {val.id}
                                        name = {val.first_name + " " + val.last_name}
                                        email = {val.email}
                                        Redeemed = {85}
                             /> 
                })
                }
        </div>
        
        
    </>
    );
  }
}
export default Recommendations;
