
import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'reactstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
const { forwardRef, useRef, useImperativeHandle } = React;
const CreateVersion = (props) => {
  const {
    buttonLabel,
    className,
    name,
    id,
  } = props;
  // const [modal, setModal] = useState(true);
  // const toggle = () => setModal(!modal);
  const [version, setVersion] = useState(0);
  
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submit = () => {
    axios.post(`/api/apps/${id}/${version}`)
    .then(res => {
        handleClose();
        props.showVersionModal();
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  
  
  return (
    <div>
        <Modal show={show} onHide={handleClose ,() =>props.showVersionModal()}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group controlId="formBasicEmail">
    <Form.Label>Version number</Form.Label>
    <input className="form-control" type="number" placeholder="enter version number" min="0" onInput={e => setVersion(e.target.value)} />
  </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose ,() =>props.showVersionModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



    
    </div>
  );
}   

export default CreateVersion;