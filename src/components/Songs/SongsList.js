import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SongsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Link to="/CreateSong" className="ui button primary">Create new song</Link>
            </div>
        );
    }
}
 
export default SongsList;