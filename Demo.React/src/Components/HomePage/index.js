import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class HomePage extends Component {
    componentWillMount(){
        console.log("I am home");
    }

    render() {
        return (
            <div>
                <div className="alert alert-info">
                    <strong>I am Home .. PAGE :)</strong>
                </div>
            </div>

        );
    }
}
export default HomePage;