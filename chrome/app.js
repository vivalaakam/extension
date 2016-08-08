import React from 'react';
import ReactDOM from 'react-dom';
import md from 'html-md';
import Root from '../app/containers/Root';
import grab from '../helpers/grab';
import createStore from '../app/store/configureStore';


let root = document.querySelector('#root_react_element');
if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', 'root_react_element');
    document.body.appendChild(root);
}

if (!window.__RENDERED_MODAL__) {

    const data = grab(document);
    const markdown = md(data, {
        absolute: true,
        inline: true
    });

    chrome.storage.local.get('state', obj => {
        const {state} = obj;
        const initialState = JSON.parse(state || '{}');
        const store = createStore({...initialState, article: {markdown, title: document.title, progress: 0}});

        const remove = () => {
            ReactDOM.unmountComponentAtNode(root);
            document.body.style.overflow = window.__RENDERED_BODY__;
            document.body.style.maxHeight = window.__RENDERED_BODY_HEIGHT__;
            window.__RENDERED_MODAL__ = false;
        };

        ReactDOM.render(<Root store={store} remove={remove}/>, root);
        window.__RENDERED_BODY__ = document.body.style.overflow;
        window.__RENDERED_BODY_HEIGHT__ = document.body.style.maxHeight;
        document.body.style.overflow = 'hidden';
        document.body.style.maxHeight = '100vh';
        window.__RENDERED_MODAL__ = true;
    });
}

