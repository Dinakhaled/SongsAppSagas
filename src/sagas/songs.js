import { put, call } from 'redux-saga/effects';
import { fetchSongs, createSong, fetchSong, editSong } from '../Redux/actions';
import API from '../Redux/apis/songs';
import history from '../history';

export function* fetchSongsSaga() {
    try {
        const response = yield call(API.getSongs);
        yield put(fetchSongs(response.data));
    } catch (err) {
        console.log(err);
    }
}

export function* getSong(action) {
    try {
        const { id } = action;
        const response = yield call(API.getSong, id);
        yield put(fetchSong(response.data));
    } catch (err) {
        console.log(err);
    }
}

export function* createPost(action) {
    try {
        const { payload } = action;
        console.log(action);

        const response = yield call(API.addSong, payload);
        yield put(createSong(response.data));
        history.push('/')
    } catch (err) {
        console.log(err);
    }
}

export function* editSongSaga(action) {
    try {
        const { payload } = action;
        console.log(action.payload);

        const response = yield call(API.editSong, payload);
        // const response = yield call(API.fetchSongs);
        yield put(editSong(response.data));
        history.push('/')
    } catch (err) {
        console.log(err);
    }
}