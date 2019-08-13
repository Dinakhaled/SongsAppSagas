import _ from 'lodash';
import {
    CREATE_SONG,
    FETCH_SONG,
    FETCH_SONGS,
    DELETE_SONG,
    EDIT_SONG
} from '../actions/types';

export default (state = {}, action) => {
     switch (action.type) {
        case FETCH_SONGS: 
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_SONG: 
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_SONG: 
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_SONG: 
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_SONG :
            return _.omit(state, action.payload);
        default: 
            return state;
     }
}