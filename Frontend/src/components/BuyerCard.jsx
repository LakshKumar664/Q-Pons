import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';  

const BuyerCard = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     const addToEmail = () =>{
         //console.log('add');
         const url = sessionStorage.getItem('backend_url') + '/addMailingList';

         axios.post(url, {
             'seller_id' : sessionStorage.getItem('user_id'),
             'buyer_id': props.email
         }).then((res)=>{
                 console.log(res.data);
         })
    }



    return (
    <>
    <div className="card shadow-0 border rounded-5"style={{"margin-bottom":"2%"}}>
        <div className="card-body">
            <div className="row">
    
                <div className="col-md-6 col-lg-2 col-xl-2 align-items-center border-end">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile" style={{width:"75px", height:"75px"}} />
                        <a href="#!">
                            <div className="hover-overlay">
                                <div className="mask" style={{"background-color": "rgba(253, 253, 253, 0.15)"}}> </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-md-6 col-lg-7 col-xl-7 text-left">
                   <h2 className="align-middle"> {props.name} </h2>        
                </div>
                
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none text-center border-start">
                        {/* <div className="d-flex flex-row align-items-center ">
                            
                        </div> */}
                        <div className="d-flex flex-column">
                            <button className="btn btn-primary btn-sm mt-2 " type="button" style={{'font-size':"1.5em"}} onClick={handleShow}>Details</button>                             
                            
                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                <Modal.Title style={{'font-size':"2.5em"}}>Details</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{'font-size':"1.5em",'text-align':"center"}}>
                                    <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile"/>    
                                    <h2 className="align-middle"> {props.name} </h2>        
                                    

                                    <p className="text-truncate mb-4 mb-md-0" style={{'font-size':"1.5em"}}>
                                        Age: 21
                                    </p>
                                    
                                    <p className="text-truncate mb-4 mb-md-0" style={{'font-size':"1.5em"}}>
                                        Email: {props.email}
                                    </p>
                                    <p className="text-truncate mb-4 mb-md-0" style={{'font-size':"1.5em"}}>
                                        Interested in your genre
                                    </p>                           
                        
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose} style={{'font-size':"1.5em"}}> Close </Button>
                                    <Button variant="primary" style={{'font-size':"1.5em"}} onClick={addToEmail}> Add to Email List </Button>
                                </Modal.Footer>
                            </Modal>

                            <button className="btn btn-outline-primary btn-sm mt-2 " type="button" style={{'font-size':"1.5em"}} onClick={addToEmail}>
                                Add to Email List
                            </button> 
                        </div>
                </div> 
            </div> 
        </div>
    </div>
    </>
  );
};

export default BuyerCard;