import React, { Component } from 'react';
import './SongForm.scss';
import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import { createSong } from '../../Redux/actions';
import { Link } from "react-router-dom";

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <span className="header">{error}</span>
                </div>
            )
        }
    }

    renderInputs = ({input , label , meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ""}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input autoComplete="off" {...input} />
                {this.renderError(meta)}
            </div>
        ) 
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <form className="ui container form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field name="title" component={this.renderInputs} label="Enter song name "/>
                        <Field name="artist" component={this.renderInputs} label="Enter singer name "/>
                        <button className="ui button primary margin-btn">Submit</button>
                    </form>
                    <div className="ui divider"></div>
                    <Link to="/" className="ui button primary">Songs</Link>
                </div>
            </React.Fragment>
         );
    }
}

// ========= Validations function ===========
const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        errors.title = "You must enter a title."
    }
    if(!formValues.artist) {
        errors.artist = "You must enter an artist name."
    }
    return errors;
}

export default reduxForm({
    form: 'songForm',
    validate,
})(SongForm)
