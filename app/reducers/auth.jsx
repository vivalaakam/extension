import {Merge} from './actions';
import * as auth_util from '../utils/auth.js';

const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';
const ERROR_AUTH = 'ERROR_AUTH';

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


function loginDispatch(user) {
    return {
        type: SIGN_IN,
        user
    }
}

function errorDispatch(error) {
    return {
        type: ERROR_AUTH,
        error
    }
}

function logoutDispatch() {
    return {
        type: SIGN_OUT
    };
}

export function login({email, password}) {
    return dispatch => {
        return auth_util.login({email, password})
            .then(user => {
                if (user.errorMessage) {
                    dispatch(errorDispatch(user));
                } else {
                    user.getToken(false).then(jwt => {
                        user.jwt = jwt;
                        dispatch(loginDispatch(user));

                    });
                }

                return user;
            });
    }
}

export function logout() {
    return dispatch => {
        return auth_util.logout()
            .then(() => {
                dispatch(logoutDispatch());
            })
    }
}
