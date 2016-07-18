import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
    article: '',
    title: ''
};

const actionsMap = {
    [ActionTypes.ADD_ARTICLE](state, action) {
        return {
            article: action.article,
            title: action.title
        };
    }
};

export default function article(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
}
