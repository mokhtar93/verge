
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import './ViewApplication.css';
import PropTypes from 'prop-types';
import axios from 'axios';

class ViewApplication extends Component {
   
state = {
  show : true,
  application : {},
  versions : {}
}
 static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
  };

  static defaultProps = {
    id: 0,
    name: '',
  };

  componentDidMount() {
    
        axios.get(`/api/apps/${this.props.id}`)
        .then(res => {
            this.setState({versions : res.data.versions})
        })
        .catch(function (error) {
            console.log(error);
        });
      
    }
   handleClose = () => this.setState({show :false});
   handleShow = () => this.setState({show :true});

   render(){
    const show = this.state;
    const name = this.props;
    const obJVersions = this.state.versions;
    const versions = Object.values(obJVersions);
  
    return (
    <div>
      <Modal show={show} onHide={this.handleClose,() => this.props.es6Function()}>
        <Modal.Header closeButton>
          <Modal.Title> {this.props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          {versions.length <1 ? 
            <p className="alert_text">no versions for this application yet</p> :
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Version</th>
                  <th>File</th>
                </tr>
              </thead>
              <tbody>
                {
                  versions.map((version, index) =>
                  <tr>
                    <td>{index+1}</td>
                    <td>{version['id']}</td>
                    { version['file'] != null ?
                      <td><a href={version['file']} download> download</a></td> : 
                      <td> <span>No file uploaded for this versions</span> </td>
                    }
                  </tr>
                )}
              </tbody>
          </Table> }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose ,() =>this.props.es6Function()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );}   
}
export default ViewApplication;