import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';  

const CouponCard = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addItem = (e) =>{
        //console.log('add');
        const url = sessionStorage.getItem('backend_url') + '/addItem';

        axios.post(url, {
            'user_id' : sessionStorage.getItem('buyer_id'),
            'coupon_id': props.id
        }).then((res)=>{
                console.log(res.data);
        })
    }


    return (
    <>
    <div className="card shadow-0 border rounded-5"style={{"margin-bottom":"10px"}}>
        <div className="card-body">
            <div className="row">
                    <div className="col-md-12 col-lg-4 col-xl-4 mb-4 mb-lg-0">
                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src={props.imagesrc} alt="image" style={{width:"272px", height:"183px"}} />
                            <a href="#!">
                                <div className="hover-overlay">
                                    <div className="mask" style={{"background-color": "rgba(253, 253, 253, 0.15)"}}> </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5 col-xl-5" style={{'font-size':"1.5em"}}>
                        <h5 style={{'font-size':"1em"}} > BEST </h5>
                            <div className="d-flex flex-row">
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                                <span>{props.org}</span>
                            </div>
                            <p className="text-truncate mb-4 mb-md-0" style={{'font-size':"0.75em"}}>
                                {props.disclaimer}
                            </p>
                    </div>
                    
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-column mt-4">
                                <button className="btn btn-primary btn-sm mt-2 " type="button" style={{'font-size':"1.5em"}} onClick={handleShow}>Details</button>                             
                                
                                <Modal show={show} onHide={handleClose} animation={false}>
                                    <Modal.Header closeButton>
                                    <Modal.Title style={{'font-size':"2.5em"}}>Details</Modal.Title>
                                    </Modal.Header>
                                    
                                    <Modal.Body>                             
                                    <div className="disclaimer" style={{'font-size':"1.5em"}}> {props.disclaimer} </div>
                                    <br></br>
                                    <img src={props.imagesrc} style={{"width":"80%", "height":"80%"}}/>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose} style={{'font-size':"1.5em"}}> Close </Button>
                                        <Button variant="primary" style={{'font-size':"1.5em"}} onClick={addItem}> Add to wishlist </Button>
                                    </Modal.Footer>
                                </Modal>
                                <button className="btn btn-outline-primary btn-sm mt-2 " type="button" style={{'font-size':"1.5em"}} onClick={addItem}>
                                    Add to wishlist
                                </button> 
                            </div>
                    </div> 
                </div> 
            </div>
        </div>
    </>
  );
};

export default CouponCard;