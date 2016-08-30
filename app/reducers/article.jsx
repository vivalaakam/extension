import {Merge} from './actions';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const PROGRESS_ARTICLE = 'PROGRESS_ARTICLE';

const $$initialState = {
    article: '',
    title: '',
    progress: 0
};

export default function auth($$state = $$initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
        case PROGRESS_ARTICLE:
            return Merge($$state, action.payload);
        default:
            return $$state;
    }
}

export function addArticle(article, title) {
    return {type: ADD_ARTICLE, payload: {article, title}};
}

export function progressArticle(progress) {
    return {
        type: PROGRESS_ARTICLE,
        payload: {progress}
    }
}