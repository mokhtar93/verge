import React, { Component } from 'react';
import ViewApplications from '../ViewApplcations/ViewApplications';
import './HomePage.css';
class HomePage extends Component {

render(){
    return (
            <div className="upper_space">
                <ViewApplications/>
            </div>
        
        );
    }
}

export default HomePage;