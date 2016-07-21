import {SIGN_IN, SIGN_OUT,ERROR_AUTH} from '../constants/ActionTypes';
import * as auth from '../utils/auth.js';

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

export function login({email , password}) {
    return dispatch => {
        return auth.login({email, password})
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
        return auth.logout()
            .then(() => {
                dispatch(logoutDispatch());
            })
    }
}
