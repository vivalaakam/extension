import {SIGN_IN, SIGN_OUT,ERROR_AUTH}  from '../constants/ActionTypes';
import {Merge} from './actions';
const $$initialState = {
    email: '',
    uid: '',
    displayName: '',
    refreshToken: '',
    emailVerified: '',
    isAnonymous: '',
    photoUrl: ''
};

export default function auth($$state = $$initialState, action) {
    switch (action.type) {
        case SIGN_IN:
            return Merge($$state, action.user);
        case SIGN_OUT:
            return $$initialState;
        case ERROR_AUTH:
            return Merge($$state, action.error);
        default:
            return $$state;
    }
}
