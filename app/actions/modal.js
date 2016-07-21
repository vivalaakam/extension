import {HIDE_MODAL, SHOW_MODAL} from '../constants/ActionTypes';
import deferred from 'deferred';

function hideModalDispatch() {
    return {
        type: HIDE_MODAL
    }
}

function showModalDispatch(type, props, promise = false) {
    return {
        type: SHOW_MODAL,
        modal: {
            type, props, promise
        }
    }
}

export function hideModal() {
    return dispatch => dispatch(hideModalDispatch());
}


export function showModal(type, props) {
    return dispatch => {
        const promise = deferred();
        dispatch(showModalDispatch(type, props, promise));
        return promise.promise();
    };
}
