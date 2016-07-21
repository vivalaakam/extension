import {SHOW_MODAL, HIDE_MODAL} from '../constants/ActionTypes';
import {Merge} from './actions';

const $$initialState = {
    type: null,
    props: {},
    promise: false
};

export default function modal(state = $$initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return Merge(state, action.modal);
        case HIDE_MODAL:
            return $$initialState;
        default:
            return state
    }
}
