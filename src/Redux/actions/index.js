import songs from '../apis/songs';
import { 
    CREATE_SONG,
    FETCH_SONG,
    FETCH_SONGS,
    DELETE_SONG,
    EDIT_SONG
} from './types';
import history from '../../history';

export const createSong = (formValues) => {
    return async (dispatch) => {
        const response = await songs.post('/songs', formValues);
        dispatch({
            type: CREATE_SONG,
            payload: response.data
        })
        // Navigate the user after success request 
        history.push('/')
    }
}

export const fetchSongs = () => {
    return async (dispatch) => {
        const response = await songs.get('/songs');
        dispatch({
            type: FETCH_SONGS,
            payload: response.data
        })
    }
}

export const fetchSong = (id) => async (dispatch) => {
    const response = await songs.get(`/songs/${id}`);
    dispatch({
        type: FETCH_SONG,
        payload: response.data
    })
}

export const editSong = (id, formValues) => async (dispatch) => {
    // put => is update all properties of a record
    // patch => is update some properties of a record
    const response = await songs.patch(`/songs/${id}`, formValues);
    dispatch({
        type: EDIT_SONG,
        payload: response.data
    })
    history.push('/');
}

export const deleteSong = (id) => async (dispatch) => {
    await songs.delete(`/songs/${id}`);
    dispatch({
        type: DELETE_SONG,
        payload: id
    })
    history.push('/');
}