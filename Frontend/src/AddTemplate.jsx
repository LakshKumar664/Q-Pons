import React from 'react';
import Form from "react-bootstrap/Form";
// import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';  
import { ref, storage, getDownloadURL, uploadBytes } from "./firebase";

class AddTemplate extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            x_dis : "",
            y_dis : "",
            x_disc : "",
            y_disc : "",
            x_exp : "",
            y_exp : "",
            font_dis : "",
            font_disc : "",
            font_exp : "",
            img_src : ""
        }
    }

    fileSelect = event => { 
        this.setState({img_src : event.target.files[0]});
    }
    handleUpload(){
        const storageRef = ref(storage, this.state.img_src.name);

    // 'file' comes from the Blob or File API
        const uploadTask = storage.ref(`/images/${this.state.img_src.name}`).put(this.state.img_src);
        console.log(uploadTask);
/*        uploadBytes(storageRef, this.state.img_source).then((snapshot) => {
            console.log(snapshot.ref.url);
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

    async submit(){
        await this.handleUpload();
        const url = sessionStorage.getItem('backend_url') + '/addTemplate';
        await axios.post(url,{
            'xloc_disc':this.state.x_dis,
            'yloc_disc' : this.state.y_dis,
            'xloc_disclaimer' : this.state.x_disc,
            'yloc_disclaimer' : this.state.y_disc,
            'xloc_expiry' : this.state.x_exp,
            'yloc_expiry' : this.state.y_exp,
            'font_disc' : this.state.font_dis,
            'font_disclaimer' : this.state.font_disc,
            'font_expiry' : this.state.font_exp,
            'img' : this.state.img_src
        }).then((res)=>{
          console.log(res.data);
          this.setState({ records: res.data });
//          console.log(JSON.stringify(sessionStorage.getItem('exisitng_coupons')));
        });

    }
    
    render(){
    return (
    <>
       <div className="my-5"> <h1 className="text-center">  
            Add A New Template </h1> 
       </div>
        
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                
                    <div className="mb-3">
                        <input type="text" className="form-control form-control-lg"             
                            id="template" placeholder={'Coupon ID: TODO: TO BE GENERATED!!'} disabled={true}
                        />
                    </div>
                
                    <div className="col-md-6 mb-3">
                        <label for="disc_x" className="form-label"><h4>Discount (x-axis)</h4></label>
                        <input className="form-control form-control-lg" type="number" name='disc_x' min={1}
                            onChange={(e)=>{this.setState({x_dis : e.target.value});}} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label for="disc_y" className="form-label"><h4>Discount (y-axis)</h4></label>
                        <input className="form-control form-control-lg" type="number" name='disc_y' min={1}
                            onChange={(e)=>{this.setState({y_dis : e.target.value});}} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label for="disclaim_x" className="form-label"><h4>Disclaimer (x-axis)</h4></label>
                        <input className="form-control form-control-lg" type="number" name='disclaim_x' min={1}
                            onChange={(e)=>{this.setState({x_disc : e.target.value});}} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label for="disclaim_y" className="form-label"><h4>Disclaimer (y-axis)</h4></label>
                        <input className="form-control form-control-lg" type="number" name='disclaim_y' min={1}
                            onChange={(e)=>{this.setState({y_disc : e.target.value});}} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label for="exp_x" className="form-label"><h4>Expiry Date (x-axis)</h4></label>
                        <input className="form-control form-control-lg" type="number" name='exp_x' min={1}
                            onChange={(e)=>{this.setState({x_exp : e.target.value});}} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label for="exp_y" className="form-label"><h4>Expiry Date (y-axis)</h4></label>
                        <input className="form-control form-control-lg" type="number" name='exp_y' min={1}
                            onChange={(e)=>{this.setState({y_exp : e.target.value});}} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label for="font_disc" className="form-label"><h4>Font Size (Discount) </h4></label>
                        <input className="form-control form-control-lg" type="number" name='font_disc' min={1}
                            onChange={(e)=>{this.setState({font_dis : e.target.value});}} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label for="font_disclaim" className="form-label"><h4>Font Size (Disclaimer) </h4></label>
                        <input className="form-control form-control-lg" type="number" name='font_disclaim' min={1}
                            onChange={(e)=>{this.setState({font_disc : e.target.value});}} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label for="font_exp" className="form-label"><h4>Font Size (Expiry Date) </h4></label>
                        <input className="form-control form-control-lg" type="number" name='font_exp' min={1}
                            onChange={(e)=>{this.setState({font_exp : e.target.value});}} />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label for="formFile" className="form-label"><h4>Upload Background Image</h4></label>
                        <input class="form-control form-control-lg" type="file" id="formFile" onChange={this.fileSelect}/>
                    </div>

                    <div className="text-right">                    
                        <button type="button" class="btn btn-dark btn-lg" style={{'margin-left' : '5px'}} onClick={()=>this.submit()}> Submit </button>                     
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
}

export default AddTemplate;