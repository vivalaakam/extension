import { combineReducers } from 'redux';
import article from './article.jsx';
import auth from './auth.jsx';
import modal from './modal.jsx';

export default combineReducers({
    article, auth, modal
});
