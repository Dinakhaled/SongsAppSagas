import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../Redux/actions';

class SongDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        this.props.fetchSong(this.props.match.params.id);
    }

    
    render() { 
        if(!this.props.song) {
            return <div>Loading...</div>
        }
        const {title, artist} = this.props.song;
        return ( 
            <React.Fragment>
                <h1>{title}</h1>
                <h5>{artist}</h5>
            </React.Fragment>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { song: state.songs[ownProps.match.params.id] }
}
 
export default connect(mapStateToProps, { fetchSong })(SongDetails);