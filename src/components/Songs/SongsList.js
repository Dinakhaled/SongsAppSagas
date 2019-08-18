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
                    {this.renderButtons(song)}
                    <i className="large middle aligned icon soundcloud" />
                    <div className="content"> 
                        <Link to={`/songs/${song.id}`} className="header">
                            {song.title}
                        </Link>
                        <div className="description">
                            {song.artist}
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderButtons = (song) => {
        return (
            <div className="right floated content">
                <Link 
                to={`/songs/edit/${song.id}`} 
                className="ui button primary">
                Edit</Link>
                <Link 
                to={`/songs/delete/${song.id}`} 
                className="ui button negative">
                    Delete</Link>
            </div>
        )
    }

    render() { 
        // console.log(this.props.songs)
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