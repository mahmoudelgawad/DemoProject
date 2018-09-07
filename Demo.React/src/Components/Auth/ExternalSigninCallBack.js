import React, { Component } from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import * as Routes from '../../routes';
import {externalLogin} from '../../Actions/Authentication';

class ExternalSigninCallBack extends Component {
    isValid = true;
    componentWillMount() {
        if (!this.props.location.hash) {
            this.isValid = false;
        }
        const parsedHash = queryString.parse(this.props.location.hash);
        if(!parsedHash || !parsedHash.ExternalAccessToken){
            this.isValid = false;
        }

        this.props.externalLogin(parsedHash);
    }
    render() {
        if (this.props.isAuth || !this.isValid) {
            return (
                <Redirect to={Routes.DEFAULT_URL}></Redirect>
            );
        }
        return (
            <div>
                Please Wait ... Authentication Process.
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps,{externalLogin})(ExternalSigninCallBack);