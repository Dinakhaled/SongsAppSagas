import React, { Component } from 'react';
import SongForm from './SongForm';
import { connect } from 'react-redux';
import { createSongReq } from '../../Redux/actions';

class CreateNewSong extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    onSubmit = (formValues) => {
        this.props.createSongReq(formValues);
    }

    render() {
        return (
            <React.Fragment>
                <h3>Create new song</h3>
                <SongForm onSubmit={this.onSubmit} />
            </React.Fragment>
        );
    }
}

export default connect(null, { createSongReq })(CreateNewSong);