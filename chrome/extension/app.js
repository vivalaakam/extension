import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../app/containers/Root';
import grab from '../../helpers/grab';
import './app.css';
import createStore from '../../app/store/configureStore';

let root = document.querySelector('#root_react_element');
if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', 'root_react_element');
    document.body.appendChild(root);
}

if (!window.__RENDERED_MODAL__) {

    let data = grab(document);
    chrome.storage.local.get('state', obj => {
        const {todos} = JSON.parse(obj.state || '{}');
        const store = createStore({article: {article: data, title: document.title}, todos});
        const remove = () => {
            ReactDOM.unmountComponentAtNode(root);
            document.body.style.overflow = window.__RENDERED_BODY__;
            window.__RENDERED_MODAL__ = false;
        };

        ReactDOM.render(<Root store={store} remove={remove}/>, root);
        window.__RENDERED_BODY__ = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.__RENDERED_MODAL__ = true;
    });
}
