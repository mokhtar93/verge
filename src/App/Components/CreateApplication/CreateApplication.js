
import React, { useState, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './CreateApplication.css';
import Alert from 'react-bootstrap/Alert'
class CreateApplication extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: true,
            show : false,
            name: ''
           }

    }
submitApplication=(e)=>{
    e.preventDefault();
    const appName = this.state.name;
    if ( appName !== "" ){
    const id  = appName.replace(/\s+/g, '-').toLowerCase();
    axios.post(`/api/apps/${id}`,{name : appName})
    .then(res => {
        this.setState({name : '' , show: false})
        this.toggle();
    })
    .catch(function (error) {
        console.log(error);
    });}
    else {
      this.setState({show: true});
    }
}

validate ()  {
    let errors = [];
    
        errors.push("name required.");
    return errors;
}


toggle =()=>{
    const currentModal = this.state.modal;
    this.setState({modal : !currentModal});
    this.props.HideModal();
}

handleChange=(event)=> {
    this.setState({ name: event.target.value });
}

hideAlert= ()=>{
    this.setState({show: false});
}

render(){  
    let {
        buttonLabel,
        className,
        name,
        id,
        versions
      } = this.props;
    let show = this.state;
  return (
    <div className="row">
        <div className="card">
        <Form>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="appName" className="mr-sm-2 card__label">Application Name</Label>
                    <input type="text" className="form-control" name="appName" id="appName" placeholder="enter application name" value={this.state.name} onChange={this.handleChange} required/>
            </FormGroup>
            <Button color="primary" className="card__btn" onClick={this.submitApplication} type="submit">Submit</Button>
        </Form>
           { this.state.show ?
            <Alert  variant="danger" onClose={this.hideAlert} dismissible >
                name can't be empty 
            </Alert> :''
        }
        </div>
    </div>
  );
}   
}


export default CreateApplication;