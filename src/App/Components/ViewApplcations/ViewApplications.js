import React, { Component } from 'react';
import axios from 'axios';
import ApplicationCard from '../ApplicationCard/ApplicationCard'
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';

class ViewApplications extends Component {

    state = {
        applications : []
    }

    componentDidMount() {
        axios.get('/api/apps')
        .then(res => {
            this.setState({applications : res.data})
        })
        .catch(function (error) {
            console.log(error);
        });
      
    }

    deleteApplication = (index)=>{
        axios.delete(`/api/apps/${index}`)
            .then(res => {
                let oldApps = [...this.state.applications];
                oldApps = res.data;
                this.setState({applications : oldApps})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

  render() {
      return (
        <Row>
                {
                this.state.applications.map((item , index) => (
                    <div className="col-md-4">
                        <ApplicationCard
                        id={item.id}
                        name={item.name}
                        versions = {item.versions}
                        deleteCallback= {this.deleteApplication}
                        />
                    </div>
                    ))
                }
            
        </Row>
      );
  }
}

export default ViewApplications;