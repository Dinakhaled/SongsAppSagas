import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSong, editSong } from '../../Redux/actions';
import SongForm from './SongForm';
import _ from 'lodash';

class SongEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editSong(this.props.match.params.id, formValues);
    }

    renderSongData = (song) => {
        return (
            <div>{song.title}</div>
        );
    }

    render() { 
        if(!this.props.song) {
            return <div>Loading...</div>
        }
        return ( 
            <React.Fragment>
                <h3>Edit a song</h3>
                <SongForm 
                    // This is a known attr from redux-form that fill the initial values of the fields
                    // ._pick is for just pick the fields value that we want and don't include id, user and so on ....
                    initialValues={_.pick(this.props.song, 'title', 'artist')}
                    onSubmit={this.onSubmit} />
            </React.Fragment>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { song: state.songs[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchSong, editSong })(SongEdit);