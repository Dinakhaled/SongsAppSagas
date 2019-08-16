import React, { Component } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import {fetchSong, deleteSong} from '../../Redux/actions';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

class SongDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
       this.props.fetchSong(this.props.match.params.id);
    }

    renderContent() {
        if(!this.props.song) {
            return 'Are you sure you want to delete this song?'
        }
        return `Are you sure you want to delete this song with titlt ${this.props.song.title}?`
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <Button variant="danger" 
                onClick={ () => {this.props.deleteSong(id)}}>
                    Delete
                </Button>
                <Link to="/" variant="secondary">Cancel</Link>
            </React.Fragment>
        )
    }

    render() { 
        return ( 
            <div >
                <Modal 
                    content={this.renderContent()}
                    action={this.renderActions()}/>
            </div>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { song: state.songs[ownProps.match.params.id] };
}
 
export default connect(
    mapStateToProps,
    { fetchSong, deleteSong })(SongDelete);