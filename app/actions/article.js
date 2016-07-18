import * as types from '../constants/ActionTypes';

export function addArticle(article, title) {
    return {type: types.ADD_ARTICLE, article, title};
}