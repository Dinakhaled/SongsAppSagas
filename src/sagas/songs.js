import { put, call } from 'redux-saga/effects';
import * as actionTypes from '../Redux/actions/types';
import { fetchSongs } from '../Redux/actions';

function* fetchData() {
    try {
        const response = yield call(fetch, 'http://localhost:3001/songs');
        const data = yield response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

export function* fetchSongsSaga(action) {
    const data = yield call(fetchData);
    console.log(data);
    yield put(fetchSongs(data))
}
