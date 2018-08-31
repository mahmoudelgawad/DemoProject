import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { signinUser, changeRedirectUrl, externalLogin } from '../../Actions/Authentication/index';
import * as Routes from '../../routes';
import './sign_in.css';
const ROOT_URL = "http://localhost:6619/api/auth";
const CURRENT_URL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
const OAUTH_REDIRECT_URL = CURRENT_URL + "/signin/external";


const renderInputField = ({ input, label, type, className, required, meta: { touched, error, invalid } }) => (
    <div>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} className={`${className} ${touched && invalid ? 'is-invalid' : ''}`} />
        <div className="text-danger">
            {(touched) ? error : ''}
        </div>
    </div>
);

class SignIn extends Component {

    onSubmit(values) {
        console.log("sign in values", values);
        this.props.signinUser(values);
    }
    renderAuthError() {
        if (this.props.ErrorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong>  {this.props.ErrorMessage}
                </div>
            );
        }
    }
    
    externalLogin(provider) {
        var externalProviderUrl = `${ROOT_URL}/login/external?provider=${provider}&response_type=token&client_id=DemoGoogleExternalOAuth&redirect_uri=${OAUTH_REDIRECT_URL}`;
        // var oauthWindow = window.open(externalProviderUrl, "Authenticate Account", "location=0,status=0,width=600,height=750");
        window.location = externalProviderUrl;
    }

    render() {
        if (this.props.isAuth) {
            console.log("will go home", Routes.HOME_URL);
            return (
                <div>
                    <Redirect from={Routes.DEFAULT_URL} to={Routes.HOME_URL} />
                </div>
            );
        }

        const { handleSubmit } = this.props;
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="needs-validation">
                                <fieldset className="form-group">
                                    <legend>Sign In</legend>
                                    <Field component={renderInputField} type="text" name="email" label="Email" className="form-control" />
                                    <Field component={renderInputField} type="password" name="password" label="Password" className="form-control" />
                                    {this.renderAuthError()}
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col login-btn-container">
                            <button className="btn btn-danger" onClick={() => { this.externalLogin('Google') }}>Google Login</button>
                            <br />
                            <button className="btn btn-primary" onClick={() => { this.externalLogin('Facebook') }}>Facebook Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
function validate(values) {
    const errors = {};
    if (!values.email) {
        errors.email = "Enter Email";
    }
    if (!values.password) {
        errors.password = "Enter Password";
    }
    return errors;
}
function mapStateToProps(state) {
    return {
        redirectUrl: state.url,
        isAuth: state.auth.isAuth,
        ErrorMessage: state.auth.authErrorMessage
    }
}
export default reduxForm({
    form: "SignInForm",
    validate
})(connect(mapStateToProps, { signinUser, changeRedirectUrl, externalLogin })(SignIn))