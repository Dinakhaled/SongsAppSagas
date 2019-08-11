import React, { Component } from 'react';
import './CreateNewSong.scss';
import { Field, reduxForm } from 'redux-form';

class CreateNewSong extends Component {
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

    onSubmit(formValues) {
        console.log(formValues);
        
    }

    render() { 
        return ( 
            <React.Fragment>
                <form className="ui form container create-form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInputs} label="Enter song name "/>
                    <Field name="artist" component={this.renderInputs} label="Enter singer name "/>
                    <button className="ui button primary">Submit</button>
                </form>
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
    form: 'CreateNewSong',
    validate,
})(CreateNewSong);