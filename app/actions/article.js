import {ADD_ARTICLE, PROGRESS_ARTICLE} from '../constants/ActionTypes';

export function addArticle(article, title) {
    return {type: ADD_ARTICLE, article, title};
}

export function progressArticle(progress) {
    return {
        type: PROGRESS_ARTICLE,
        progress
    }
}
