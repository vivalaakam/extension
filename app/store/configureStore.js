import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import storage from '../utils/storage';
import logger from '../utils/logger';

const middlewares = applyMiddleware(thunk);
const enhancer = compose(
    middlewares,
   // logger,
    storage()
);

export default function (initialState) {
    return createStore(rootReducer, initialState, enhancer);
}
