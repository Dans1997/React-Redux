import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Disciples', duration: '1:48' },
        {title: 'Reality in Motion', duration: '4:12' },
        {title: 'Love/Paranoia', duration: '3:05' },
        {title: 'New Person, Same Old Mistakes', duration: '6:03' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})