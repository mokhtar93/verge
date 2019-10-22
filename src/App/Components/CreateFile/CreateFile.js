
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { Alert } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const { forwardRef, useRef, useImperativeHandle } = React;
const CreateFile = (props) => {
  const {
    buttonLabel,
    className,
    name,
    versions,
    id,
  } = props;

  const [file, setFile] = useState();
  const [modal, setModal] = useState(true);
  const [version , setVersion] = useState(0);
  const toggle = () => setModal(!modal);


  const submit = (e) => {
      console.log(versions, "versionsss");
      
    const data = new FormData();
    console.log(versions, "file");
    data.append('file', file);
    axios.post(`/api/apps/${id}/${version}/file`, data)
    .then(res => {
        toggle();
        props.showFileModal();
    })
    .catch(function (error) {
        // console.log(error);
    });
  }

  
  
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle,() =>props.showVersionModal()} className={className}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
            <h2>{name}</h2>
            <label htmlFor="versionNumber"> pick version</label>
            <select  onChange={e => setVersion(e.target.value)} >
                <option value="0" > please select a version</option>
            {versions.map(version =>{
              return(
                <option key={version['id']} value={version['id']}>{version['id']}</option>
              )
            })}
                </select>
            <option></option>
            <input type="file" name="file" id="file" onInput={e => setFile(e.target.files[0])} ></input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary"  onClick={submit}>Submit</Button>
          <Button color="secondary" onClick={toggle,() =>props.showFileModal()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}   

export default CreateFile;