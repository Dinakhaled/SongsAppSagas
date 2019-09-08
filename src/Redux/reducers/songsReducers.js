import _ from 'lodash';
import {
    CREATE_SONG,
    FETCH_SONG,
    FETCH_SONGS,
    DELETE_SONG,
    EDIT_SONG
} from '../actions/types';

/*  collect object keys and make object for everyone
    colors = [{hue: green}, {hue: blue}]
    _.mapkeys(colors, 'hue') ==> 
        {
            "green": {
                "hue": green
            },
            "blue": {
                "hue": blue
            }
        }
*/

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
        case DELETE_SONG:
            // to remove element using in delete requests 
            return _.omit(state, action.payload);
        default:
            return state;
    }
}