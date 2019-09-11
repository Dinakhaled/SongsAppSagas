import { takeEvery } from 'redux-saga/effects';
import { fetchSongsSaga, createPost, getSong, editSongSaga } from './songs';
import * as actionTypes from '../Redux/actions/types';

export function* watchAll() {
    yield takeEvery(actionTypes.FETCH_SONGS_REQUEST, fetchSongsSaga);
    yield takeEvery(actionTypes.CREATE_SONG_REQUEST, createPost);
    yield takeEvery(actionTypes.FETCH_SONG, getSong);
    yield takeEvery(actionTypes.EDIT_SONG_REQUEST, editSongSaga);
}