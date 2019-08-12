import songs from '../apis/songs';
import { 
    CREATE_SONG,
    FETCH_SONG,
    FETCH_SONGS,
    DELETE_SONG,
    EDIT_SONG
} from './types';

export const createSong = (formValues) => {
    return async (dispatch) => {
        const response = await songs.post('/songs', formValues);
        dispatch({
            type: CREATE_SONG,
            payload: response.data
        })
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

const fetchSong = (id) => async (dispatch) => {
    const response = await songs.get(`/songs/${id}`);
    dispatch({
        type: FETCH_SONG,
        payload: response.data
    })
}

const editSong = (id, formValues) => async (dispatch) => {
    const response = await songs.put(`/songs/${id}`, formValues);
    dispatch({
        type: EDIT_SONG,
        payload: response.data
    })
}

const deleteSong = (id) => async (dispatch) => {
    await songs.delete(`/songs/${id}`);
    dispatch({
        type: DELETE_SONG,
        payload: id
    })
}