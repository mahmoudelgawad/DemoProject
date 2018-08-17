import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signinUser } from '../../Actions/Authentication/index';
import * as Routes from '../../routes';


const renderInputField = ({ input, label, className,type,meta}) => (
    <div>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} className={`${className} ${meta.touched && meta.invalid ? 'is-invalid' : ''}`} />
        <div className="text-danger">
            {(meta.touched) ? meta.error : ''}
        </div>
    </div>
);
class SignUp extends Component {
    onSubmit(values) {
        console.log("signUp submit", values);
        this.props.signinUser({ email: values.email, password: values.password });
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
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <fieldset className='form-group'>
                    <Field type='email' component={renderInputField} name='email' label='Email' className="form-control" required></Field>
                </fieldset>
                <fieldset className='form-group'>
                    <Field type='password' component={renderInputField} name='password' label='Password' className="form-control" required></Field>
                </fieldset>
                <fieldset className='form-group'>
                    <Field type='password' component={renderInputField} name='confirmPassword' label='Confirm Password' className="form-control" required></Field>
                    
                </fieldset>
                <button type="submit"  className="btn btn-primary">Sign Up</button>
            </form>
        );
    }
}
function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = "Enter your email !"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Ivalid email address !"
    }
    if (!values.password) {
        errors.password = "Enter password !";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "Enter password again !";
    }
    else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "No Match password !"
    }
    return errors
}
function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth
    };
}
export default reduxForm({
    form: 'SignUpForm',
    validate
})(connect(null, { signinUser })(SignUp))