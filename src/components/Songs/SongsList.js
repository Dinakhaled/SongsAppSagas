import React, { Component } from 'react';
import { Link } from "react-router-dom";
import{ connect } from 'react-redux';
import { fetchSongs } from '../../Redux/actions';

class SongsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {    
        this.props.fetchSongs();
    }

    renderListOfSongs = () => {
        return this.props.songs.map( song => {
            return (
                <div className="item" key={song.id}>
                    {this.renderButtons()}
                    <i className="large middle aligned icon soundcloud" />
                    <div className="content"> 
                        {song.title}
                        <div className="description">
                            {song.artist}
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderButtons = () => {
        return (
            <div className="right floated content">
                <button className="ui button primary">Edit</button>
                <button className="ui button negative">Delete</button>
            </div>
        )
    }

    render() { 
        console.log(this.props.songs)
        return ( 
            <React.Fragment>
                <div className="ui celled list">
                    {this.renderListOfSongs()}
                </div>
                <div className="divider"></div>
                <Link to="/CreateSong" className="ui button primary">Create new song</Link>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { songs: Object.values(state.songs) };
};
 
export default connect(
    mapStateToProps,
    { fetchSongs }
    )(SongsList);