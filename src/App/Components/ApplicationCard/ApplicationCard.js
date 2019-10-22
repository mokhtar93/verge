import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ViewApplication from '../ViewApplication/ViewApplication';
import CreateVersion from '../CreateVersion/CreateVersion';
import CreateFile from '../CreateFile/CreateFile';
import Card from 'react-bootstrap/Card';
import './ApplcationCard.css';
import deleteimg from  '../../../assests/icons/delete.svg';
import detailsImg from  '../../../assests/icons/details.svg';
import add from  '../../../assests/icons/add.svg';
import note from  '../../../assests/icons/note_add.svg';
import ReactTooltip from 'react-tooltip'

class ApplicationCard extends Component{
  static propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
  };

  static defaultProps = {
    key: '',
    name: ''
  };

  state= {
    DetailsModal : false,
    VersionModal : false,
    showFileModal : false
  }

  handleClick = () => {
    const DetailsModal = this.state.DetailsModal;    
      this.setState({DetailsModal : !DetailsModal})
  }

  showVersionModal = () => {
    const VersionModal = this.state.VersionModal;    
      this.setState({VersionModal : !VersionModal})
  }
  showFileModal = () => {
    const showFileModal = this.state.showFileModal;    
      this.setState({showFileModal : !showFileModal})
  }


render(){
  const {id ,name , versions} = this.props;
  
  const versionsArray = Object.values(versions);
  return (
    <>
    <Card bg="info" text="white">
      <div className="card_padding">
        <Card.Body >
          <div className="card_text-center"> 
            <Card.Title>{name}</Card.Title>
          </div>
          <Card.Text>
            <div className="card_icons">
              <img onClick={this.handleClick} src={detailsImg} alt="details" data-tip="show details"/> 
              <img onClick={()=>this.props.deleteCallback(id)} src={deleteimg} alt="delete" data-tip="delete app"/>
              <img onClick={this.showVersionModal} src={add} alt="add version" data-tip="add version"/>
              <img onClick={this.showFileModal} src={note} alt="add file" data-tip="add file"/> 
              <ReactTooltip />
            </div>
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
    {this.state.DetailsModal && 
      <ViewApplication  name={name}  versions={versionsArray} id={id}  es6Function = {this.handleClick}/>
    }

    {this.state.VersionModal && 
      <CreateVersion  id={id} name={name} showVersionModal = {this.showVersionModal}/>
    }
     {this.state.showFileModal && 
      <CreateFile  id={id} name={name} versions={versionsArray} showFileModal = {this.showFileModal}/>
    }
    </>
  );
};
}
export default ApplicationCard;