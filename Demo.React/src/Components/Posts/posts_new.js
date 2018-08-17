import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { createPost } from '../../Actions/Posts/index';

const renderInputField = ({ input, label, type, className, required, meta: { touched, error, invalid } }) => (
    <div className="form-group">
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} className={`${className} ${touched && invalid ? 'is-invalid' : ''}`} />
        <div className="text-danger">
            {(touched) ? error : ''}
        </div>
    </div>
);
const renderTextareaField = ({ input, label, type, className, required, meta: { touched, error, invalid } }) => (
    <div className="form-group">
        <label>{label}</label>
        <textarea {...input} placeholder={label} type={type} className={`${className} ${touched && invalid ? 'is-invalid' : ''}`} />
        <div className="text-danger">
            {(touched) ? error : ''}
        </div>
    </div>
);

class PostsNew extends Component {
    state = {
        toPostURL: false
    };
    onSubmit(values) {
        this.props.createPost(values).then(() => {
            this.setState({toPostURL: true});
        });
    }
    render() {
        const { handleSubmit } = this.props;
        if (this.state.toPostURL === true) {
            return (
                <Redirect to='/posts' />
            );
        }
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="needs-validation">
                <h3>Create A New Post</h3>

                <Field component={renderInputField} name="title" label='Title' type="text" className="form-control" required={true}></Field>

                <Field component={renderInputField} name="categories" label='Categories' type="text" className="form-control"></Field>

                <Field component={renderTextareaField} name="content" label='Content' type="textarea" className="form-control"></Field>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/posts" className="btn btn-danger">Cancel</Link>
            </form>
        );

    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = "Enter a Title"
    }
    if (!values.categories) {
        errors.categories = "Enter a Categories"
    }
    if (!values.content) {
        errors.content = "Enter a Content"
    }
    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    validate
})(connect(null, { createPost })(PostsNew));

    //You can use the following part in reduxForm config if no connect actions to component
    // onSubmit: (values, dispatch) => {
    //     createPost(values).payload.then( () =>{
    //        do something
    //     });
    // },