import { takeEvery } from 'redux-saga/effects';
import { fetchSongsSaga } from './songs';
import * as actionTypes from '../Redux/actions/types';

export function* watchAll() {
    yield takeEvery(actionTypes.FETCH_SONGS_REQUEST, fetchSongsSaga);
}