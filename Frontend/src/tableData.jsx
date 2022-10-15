import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Modal, Button } from "react-bootstrap";

class tableData extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      id : props.id,
      show : false
    }
  }
  handleClose = () => this.setState({show : false});
  handleShow = () => this.setState({show : true});

  deleteData = (e)=>{
    const url = sessionStorage.getItem('backend_url') + '/wishList';

     axios.post(url, {
        'user_id' : sessionStorage.getItem('buyer_id'),
        'coupon_id' : this.state.id
    }).then((res)=>{
      //  this.props.history.push('/user-wishlist')
        console.log(res.data);
    });

  }

  setTemplateNo(){
    sessionStorage.setItem('template_no', this.state.title);
  }
  
  render(){
  return (
    <>
            <tr>
                <th scope="row">{this.props.ind}</th>
                    <td>{this.props.id}</td>
                    <td>{this.props.discount}%</td>
                    <td>{this.props.validDate}</td>
                    <td>{this.props.Redeemed}</td>
                    <td>
                    <button type="button" class="btn btn-primary" onClick={this.handleShow}><i class="far fa-eye"></i></button>
                    <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                    <a  type="button" class="btn btn-danger" onClick={this.deleteData}><i class="far fa-trash-alt"></i></a>
                    <a class="btn btn-lg btn-primary" style={{"background-color": "#ac2bac", 'margin-left':'1%'}} href="#!" role="button">
                    <i class="fab fa-instagram"></i></a>
                    <Modal show={this.state.show} onHide={this.handleClose} animation={false} >
                                <Modal.Header closeButton>
                                <Modal.Title style={{'font-size':"2.5em"}}>Coupon ID: {this.props.id}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{'font-size':"1.5em",'text-align':"center"}}>
                                    <img src={this.props.imgsrc} class="img-radius" alt="Coupon" style={{"height":"80%","width":"80%"}}/>               
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose} style={{'font-size':"1.5em"}}> Close </Button>
                                </Modal.Footer>
                            </Modal>

                    </td>
                    
                </tr>
    </>
  );}
};

export default tableData;