import {Merge} from './actions';
import deferred from 'deferred';

const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

const $$initialState = {
    type: null,
    props: {},
    promise: false
};

export default function modal(state = $$initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return Merge(state, action.payload);
        case HIDE_MODAL:
            return $$initialState;
        default:
            return state
    }
}

export function hideModal() {
    return {
        type: HIDE_MODAL
    }
}


export function showModal(type, props) {
    return dispatch => {
        const promise = deferred();
        dispatch({
            type: SHOW_MODAL,
            payload: {
                type, props, promise
            }
        });
        return promise.promise();
    };
}
