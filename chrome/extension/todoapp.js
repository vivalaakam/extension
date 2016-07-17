import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import './todoapp.css';

let root = document.querySelector('#root_react_element');
if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', 'root_react_element');
    document.body.appendChild(root);
}

if (!window.__RENDERED_MODAL__) {
    chrome.storage.local.get('state', obj => {
        const initialState = JSON.parse(obj.state || '{}');
        const createStore = require('../../app/store/configureStore');
        const remove = () => {
            ReactDOM.unmountComponentAtNode(root);
            document.body.style.overflow = 'auto';
            window.__RENDERED_MODAL__ = false;
        };

        ReactDOM.render(<Root store={createStore(initialState)} remove={remove}/>, root);
        document.body.style.overflow = 'hidden';

        window.__RENDERED_MODAL__ = true;
    });
}
