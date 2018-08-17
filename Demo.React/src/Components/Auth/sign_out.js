import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Routes from '../../routes';
import { authenticate } from '../../Actions/Authentication/index';


class SignOut extends Component {
    componentWillMount() {
        this.props.authenticate(false);
    }
    render() {
        return (
            <Redirect to={Routes.DEFAULT_URL}></Redirect>
        );
    }
}

export default connect(null, { authenticate })(SignOut)