import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

export default class Root extends Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    };

    static childContextTypes = {
        root: React.PropTypes.object
    };

    getChildContext() {
        return {
            root: {
                remove: this.props.remove
            }
        };
    }

    render() {
        const { store } = this.props;
        return (
            <Provider store={store} ref="root">
                <App />
            </Provider>
        );
    }
}
