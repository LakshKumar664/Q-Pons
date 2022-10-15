import React from 'react';
import { Link } from "react-router-dom";

class Card extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      title : props.title,
      imgsrc : props.imgsrc
    }
  }

  setTemplateNo(){
    sessionStorage.setItem('template_no', this.state.title);
  }
  
  render(){
  return (
    <>
            <div className="col-md-4 col-10 max-auto">

              <div className="card">

                <img src={this.state.imgsrc} className="card-img-top" alt="{props.imgsrc}"/>

                <div className="card-body">

                  <h5 className="card-title" font-weight-bold> {"Template # " + this.state.title} </h5>

                  <Link className="btn btn-dark btn-lg" to="/coupondata" onClick={()=>this.setTemplateNo()} > 
                            Proceed 
                  </Link>

                  {/* <a href="/home" className="btn btn-dark btn-lg" >Proceed</a> */}
         
                </div>
              </div>
            </div>
            
    </>
  );}
};

export default Card;