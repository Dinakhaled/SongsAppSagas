import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import songsReducer from './songsReducers';

export default combineReducers({
    form: formReducer,
    songs: songsReducer
})