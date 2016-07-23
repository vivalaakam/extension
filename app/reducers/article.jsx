import {ADD_ARTICLE, PROGRESS_ARTICLE} from '../constants/ActionTypes';
import {Merge} from './actions';

const $$initialState = {
    article: '',
    title: '',
    progress: 0
};

export default function auth($$state = $$initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return Merge($$state, action.article);
        case PROGRESS_ARTICLE:
            return Merge($$state, {progress: action.progress});
        default:
            return $$state;
    }
}
