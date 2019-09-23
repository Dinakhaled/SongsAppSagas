import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchSongsReq } from '../../Redux/actions';

import { loadLiterals } from "../../Redux/literals";
import loadLang from "../../i18n";

import store from '../../Redux/Store';

class SongsList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchSongsReq();
    }

    renderListOfSongs = () => {
        return this.props.songs.map(song => {
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

    changeLang = () => {
        let currentLang = localStorage.getItem('lang');
        currentLang == 'en' ? localStorage.setItem('lang', 'ar') : localStorage.setItem('lang', 'en');
        currentLang = localStorage.getItem('lang');
        console.log(currentLang);
        store.dispatch(loadLiterals(loadLang(currentLang)));
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.changeLang}>change</button>
                <h1>{this.props.literals.title}</h1>
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
    console.log(state);

    return { songs: Object.values(state.songs), literals: state.literals };
};

export default connect(
    mapStateToProps,
    { fetchSongsReq }
)(SongsList);