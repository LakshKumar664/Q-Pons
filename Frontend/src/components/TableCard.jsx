import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import img1 from './images/templates/1.jpg';
import axios from 'axios';  
import { NavLink } from 'react-router-dom';

// postInsta(){}

const TableCard = (props) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deleteData = ()=>{
        const url = sessionStorage.getItem('backend_url') + '/deleteCoupon';
    
         axios.post(url, {
            'coupon_id' : props.id
        }).then((res)=>{
          //  this.props.history.push('/user-wishlist')
            console.log(res.data);
        });
    
      }

    const assignTable = () => {
        sessionStorage.setItem('selected_coupon', props.id);
    }
    
    const postInsta = () => {
        const url = sessionStorage.getItem('backend_url') + '/postInsta';
        axios.post(url, {
            'filename':'./Coupon/UncleSamLogo_coupon.jpg'
        }).then((res)=>{
          console.log(res.data);
          this.setState({ records: res.data });
//          console.log(JSON.stringify(sessionStorage.getItem('exisitng_coupons')));
        });

    }
        return (
        <>
            <tr>
                    <th scope="row">{props.ind}</th>
                    <td>{props.id}</td>
                    <td>{props.validDate}</td>
                    <td>{props.quantity}</td>
                    <td>{props.discount}%</td>
                    <td>
                   <button type="button" className="btn btn-primary" onClick={handleShow}><i className="far fa-eye"></i></button>

                                <Modal show={show} onHide={handleClose} animation={false} >
                                <Modal.Header closeButton>
                                <Modal.Title style={{'font-size':"2.5em"}}>Coupon ID: {props.id}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{'font-size':"1.5em",'text-align':"center"}}>
                                    <img src={props.imgsrc} class="img-radius" alt="Coupon" style={{"height":"80%","width":"80%"}}/>               
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose} style={{'font-size':"1.5em"}}> Close </Button>
                                </Modal.Footer>
                            </Modal>


                <NavLink to='/service' type="button" className="btn btn-success" onClick={assignTable}><i className="fas fa-edit"></i></NavLink>
                <button type="button" className="btn btn-danger" onClick={deleteData}><i className="far fa-trash-alt"></i></button>
                <a className="btn btn-md btn-primary" href="#!" role="button" onClick={postInsta}>
                <i className="fab fa-instagram"></i></a>
                </td>
            </tr>

</>
);
};
export default TableCard;