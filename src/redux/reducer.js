import * as constants from './types';
import { combineReducers } from 'redux';

export const INITIAL_STATE = {
    bought: false,
    by: undefined
}

export function featureReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case constants.BUY:
            return { ...state, bought: true, by: action.by };
        case constants.CANCEL:
            return INITIAL_STATE;
        default: 
            return state;
    }
}

export default combineReducers({
    featureReducer
});