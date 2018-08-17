import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { signinUser, changeRedirectUrl } from '../../Actions/Authentication/index';
import * as Routes from '../../routes';


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

    render() {
        if (this.props.isAuth) {
            console.log("will go home",Routes.HOME_URL);
            return (
                <div>
                    <Redirect from={Routes.DEFAULT_URL} to={Routes.HOME_URL} />
                </div>
            );
        }

        const { handleSubmit } = this.props;
        return (
            <div>
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
})(connect(mapStateToProps, { signinUser, changeRedirectUrl })(SignIn))