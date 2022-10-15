import React from 'react';
import Form from "react-bootstrap/Form";
import Axios from 'axios';
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import {storage, ref, uploadBytes, getDownloadURL} from './firebase';
import Navbar from './afterLoginNavbar';

import img1 from './images/templates/1.jpg';




class CouponData extends React.Component {
    constructor(props){
        super(props);

        // const [show, setShow] = useState(false);

        this.state = {
            temp_no : sessionStorage.getItem('template_no'),
            nameOfOrganization : "",
            notes : "",
            discount : 0,
            date : "",
            quantity : 1, 
            img_source : "",
            waterMark_img : "",
            link: "",
            show: false,
            coupon_img : ""
        }            
    }

    handleClose = () => this.setState({show:false});
    
    handleShow = () => this.setState({show:true});

    logoFileSelect = event => { 
        this.setState({img_source : event.target.files[0]});
    }
    waterMarkFileSelect = event => {
        this.setState({waterMark_img : event.target.files[0]})
    }

    handleUpload(){
        const storageRef = ref(storage, this.state.img_source.name);

    // 'file' comes from the Blob or File API
        uploadBytes(storageRef, this.state.img_source).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });

    /*  const uploadTask = storage.ref(`images/${this.state.img_source.name}`).put(this.state.img_source);
        uploadTask.on("state_changed", snapshot=>{}, error=>{
            console.log(error);
        },
        ()=>{
            storage.ref("images")
            .child(this.state.img_source)
            .getDownloadURL()
            .then(url=>{
                console.log(url);
            });
        });*/
    }

    postData(){
        const url = sessionStorage.getItem('backend_url') + '/insert';

        Axios.post(url,{

            'name' : this.state.nameOfOrganization,
            'discount' : this.state.discount,
            'valid_date' : this.state.date,
            'itemInfo' : this.state.notes,
            'templateNo' : sessionStorage.getItem('template_no'),
            'quantity' : this.state.quantity,
            'user_id' : sessionStorage.getItem('user_id'),
            'link' : this.state.link

        }).then(()=>{alert('success');});

        return true;
    }

    async setImage(img){
        this.setState({coupon_img:img});
        this.handleShow();
    }
    async submit(){
        if(this.state.nameOfOrganization == '' || this.state.date=='' 
        || this.state.itemInfo=='' || this.state.discount ==''
        || this.state.notes =='' || this.state.quantity ==''
        ){
            alert('Empty fields');
            return;
        }
        const data = new FormData() ;
//        this.handleUpload();
        data.append('file', this.state.img_source);   
        data.append('name', this.state.nameOfOrganization);
        data.append('discount', this.state.discount);
        data.append('valid_date' , this.state.date);
        data.append('itemInfo' , this.state.notes);
        data.append('templateNo' , this.state.temp_no);
        data.append('quantity' , this.state.quantity);
        data.append('link', this.state.link);   
        data.append('user_id', "1"); 
        const url_link= sessionStorage.getItem('backend_url') + '/upload';

        const res = await Axios({
            method: 'post',
            url: url_link,
            data: data,
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        this.setImage(res.data);
//        console.log(res.data);
//        sessionStorage.setItem('coupon_url', res.data);
 //       this.setState({coupon_img:res.data});
    }

    render(){

        return (
        <>
        <Navbar/>
        <div className="my-5">
            <h1 className="text-center">  Coupon Data </h1>
        </div>

        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">

        <div class="mb-3">
            <input type="text" className="form-control form-control-lg"             
                id="template" placeholder={'Template Code: ' + this.state.temp_no} disabled={true}
            />
        </div>

        <div class="mb-3">
            <input type="text" className="form-control form-control-lg" id="name" placeholder="Name of the Organization"
                required={true}
                onChange={(e)=>{this.setState({nameOfOrganization : e.target.value});}}
        
             />
        </div>

        <div class="mb-3">
            <input type="number" className="form-control form-control-lg" id="discount" placeholder="Discount Offered in %"
                    required={true}
                onChange={(e)=>{this.setState({discount : e.target.value});}}
            
             />
        </div>

        <div class="mb-3">
            <input type="number" className="form-control form-control-lg" id="quantity" placeholder="Quantity of the Coupon(s)"
                required={true}            
               onChange={(e)=>{this.setState({quantity : e.target.value});}}
             />
        </div>
        <div class="mb-3">
            <input type="url" className="form-control form-control-lg" id="google_form" placeholder="Company URL"
                    required={true}
                onChange={(e)=>{this.setState({link : e.target.value});}}
            
             />
        </div>

        <div class="mb-3">
            <label for="formFile" className="form-label"><h4>Valid Until</h4></label>
            <Form.Control className="form-control form-control-lg" type="date" name='valid_until'
                required={true}
                onChange={(e)=>{this.setState({date : e.target.value});}}
            
             />
        </div>

        <div class="mb-3">
            <label for="formFile" className="form-label"><h4>Upload Logo</h4></label>
            <input class="form-control form-control-lg" type="file" id="formFile" onChange={this.logoFileSelect} required={true}/>
        </div>

        <div class="mb-3">
            <textarea className="form-control form-control-lg" id="disclaimer" rows="3" placeholder="Disclaimer" required={true} onChange={(e)=>{this.setState({notes : e.target.value});}}></textarea>
    
            <Modal show={this.state.show} onHide={this.handleClose} animation={false} >
                <Modal.Header closeButton>
                <Modal.Title style={{'font-size':"2.5em"}}>Coupon ID: 101</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{'font-size':"1.5em",'text-align':"center"}}>
                    <img src={this.state.coupon_img} class="img-radius" alt="Coupon" style={{"height":"80%","width":"80%"}}/>               
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose} style={{'font-size':"1.5em"}}> Close </Button>
                </Modal.Footer>
            </Modal>

            <button type="button" class="btn btn-dark btn-lg" style={{'margin-left' : '5px'}} onClick={()=>this.submit()}>Submit</button>                    

        </div>

        </div>
        </div>
        </div>    
    </>
  );}
}

export default CouponData;
