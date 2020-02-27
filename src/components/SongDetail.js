import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ( { song } ) => {
    
    if(!song) {
        return <div>Select a Song</div>
    }

    return (
        <div>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);