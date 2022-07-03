import {ADD_ALL_PHOTOS} from './actions/types';


const defaultState = {
    photos: [],
}

export const photoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ALL_PHOTOS:
            return {...state, photos: [...action.payload]};
        default:
            return state;
    }
};