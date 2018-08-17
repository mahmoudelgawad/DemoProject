import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as Routes from '../../../routes';

export default function (ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            // this.anonynousUserToHome(this.props);
        }
        componentWillUpdate(props) {
            // this.anonynousUserToHome(props);
        }
        
        render() {
            if (!this.props.isAuth) {
                return (
                    <Redirect to="/"></Redirect>
                );
            }
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }
    function mapStateToProps(state) {
        return { isAuth: state.auth.isAuth }
    }
    return connect(mapStateToProps)(Authentication);
}